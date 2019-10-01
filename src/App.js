import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";


const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <NavbarContainer store={props.store}/>
            <div className='app-maincontent'>
                <Route path='/dialogs' render={() => <DialogsPageContainer/>}/>
                <Route path='/profile' render={() => <ProfilePageContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
};

export default App;
