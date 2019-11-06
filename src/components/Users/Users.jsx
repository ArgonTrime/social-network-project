import React from 'react';
import Paginator from "../Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {
            users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgres={props.followingInProgres}
                                 unfollow={props.unfollow}
                                 follow={props.follow}/>)
        }
    </div>

};
export default Users;