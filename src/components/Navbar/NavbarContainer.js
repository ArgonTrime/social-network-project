import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {
        friend: state.navBar.friend
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
    }
};
const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;