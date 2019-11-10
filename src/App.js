import React, {Component} from 'react';
import './App.css';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

// lazy load
const DialogsPageContainer = React.lazy(() => import('./components/DialogsPage/DialogsPageContainer'));
const ProfilePageContainer = React.lazy(() => import('./components/ProfilePage/ProfilePageContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-maincontent'>
                    <Route path='/dialogs' render={withSuspense(DialogsPageContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfilePageContainer)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
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