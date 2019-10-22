import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser, logout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
    return <Header {...this.props}/>
    }
}
const mapStateToPtops = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToPtops, {getAuthUser, logout})(HeaderContainer);