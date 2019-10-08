import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {componentsAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        componentsAPI.getLogin().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
    return <Header {...this.props}/>
    }
}
const mapStateToPtops = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToPtops, {setAuthUserData})(HeaderContainer);