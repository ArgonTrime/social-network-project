import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import ProfilePage from "./components/ProfilePage/ProfilePage";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Users from "./components/Users/Users";


const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <NavbarContainer store={props.store}/>
            <div className='app-maincontent'>
                <Route path='/dialogs' render={() => <DialogsPageContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <ProfilePage store={props.store}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' component={Users}/>
            </div>
        </div>
    );
};

export default App;
