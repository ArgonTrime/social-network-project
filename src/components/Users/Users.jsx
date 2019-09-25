import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../image/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    };
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <button className={this.props.currentPage === p ? s.btnU : s.btnF}
                    onClick={() => {this.onPageChanged(p)}}>{p}</button>
                })}
            </div>
            {
                this.props.users.map(u => <div className={s.container} key={u.id}>
                    <div className={s.box1}>
                        <div><img src={u.photos.small != null ? u.photos.small : userAvatar}/></div>
                        <div>{u.followed ? <button className={s.btnU} onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> : <button className={s.btnF} onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}</div>
                    </div>

                    <div className={s.box2}>
                        <h1>{u.name}</h1>
                        <p>{u.status}</p>
                    </div>
                    <div className={s.box3}>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>

                </div>)
            }
        </div>

    }
}

export default Users;