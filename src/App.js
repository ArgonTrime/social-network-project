import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-maincontent'>
                    <Route path='/dialogs' component={DialogsPage}/>
                    <Route path='/profile' component={ProfilePage}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
