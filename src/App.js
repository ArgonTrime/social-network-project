import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-maincontent'>
                    <Route path='/dialogs' render={ () => <DialogsPage dialogMesseges={props.dialogMesseges} dialogList={props.dialogList}/>}/>
                    <Route path='/profile' render={ () => <ProfilePage profilePosts={props.profilePosts}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
