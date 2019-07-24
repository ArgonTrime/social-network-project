import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='app-maincontent'>
                <DialogsPage/>
                {/*<ProfilePage/>*/}
            </div>
        </div>
    );
}

export default App;
