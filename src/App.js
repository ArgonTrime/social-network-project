import React, {Component} from 'react';
import './App.css';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-maincontent'>
                    <Route path='/dialogs' render={() => <DialogsPageContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);