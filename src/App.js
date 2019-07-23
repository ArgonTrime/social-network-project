import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
// import DialogsPage from "./components/DialogsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      {/*<DialogsPage/>*/}
      <ProfilePage/>
    </div>
  );
}

export default App;
