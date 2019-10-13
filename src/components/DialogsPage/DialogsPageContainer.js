import React from 'react';
import {addNewDialogMessege, updateNewDialogMessege} from "../../Redux/dialogsPageReducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
};

const DialogsPageContainer = connect(mapStateToProps, {
    updateNewDialogMessege,
    addNewDialogMessege
})(DialogsPage);
export default DialogsPageContainer;