import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPostProfile, updateNewPostProfile} from "./Redux/State";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPostProfile={addPostProfile} updateNewPostProfile={updateNewPostProfile}/>, document.getElementById('root'));
}
