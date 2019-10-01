import React from 'react';
import {addNewDialogMessege, updateNewDialogMessege} from "../../Redux/dialogsPageReducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

const DialogsPageContainer = connect(mapStateToProps, {
    updateNewDialogMessege,
    addNewDialogMessege
})(DialogsPage);
export default DialogsPageContainer;