import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//profilePage State
let profilePosts = [
    {id:1, messege: 'Welcome, Social network', likeCounts: 15},
    {id:2, messege: 'How are you?', likeCounts: 3},
    {id:3, messege: 'Great moving in the right direction', likeCounts: 9},
    {id:4, messege: 'Add messege map, good!', likeCounts: 4}
]

//dialogPage State
let dialogMesseges = [
    {id:1, messege: 'How a you?'},
    {id:2, messege: 'Grate!'},
    {id:3, messege: 'You upgrade React skill?'}
]
let dialogList = [
    {id:1, name: 'Ihar'},
    {id:2, name: 'Julia'},
    {id:3, name: 'Alex'},
    {id:4, name: 'Sasha'},
    {id:5, name: 'Artem'}
]

ReactDOM.render(<App profilePosts={profilePosts} dialogList={dialogList} dialogMesseges={dialogMesseges}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
