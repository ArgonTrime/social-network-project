import React from 'react';
import s from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Messege from "./Messege/Messege";
import {addNewDialogMessege, updateNewDialogMessege} from "../../Redux/dialogsPageReducer";
import DialogsPage from "./DialogsPage";

const DialogsPageContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let addNewPost = () => {
        props.store.dispatch(addNewDialogMessege());
    };

    let addMessegeDialog = (text) => {

        props.store.dispatch(updateNewDialogMessege(text));
    };

    return (
        <DialogsPage updateNewDialogMessege={addMessegeDialog} addNewDialogMessege={addNewPost} dialogPage={state}/>
    );
};

export default DialogsPageContainer;