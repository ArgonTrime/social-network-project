import React from 'react';
import {addNewDialogMessege, updateNewDialogMessege} from "../../Redux/dialogsPageReducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";

// const DialogsPageContainer = (props) => {
//     let state = props.store.getState().dialogPage;
//
//     let addNewPost = () => {
//         props.store.dispatch(addNewDialogMessege());
//     };
//
//     let addMessegeDialog = (text) => {
//
//         props.store.dispatch(updateNewDialogMessege(text));
//     };
//
//     return (
//         <DialogsPage updateNewDialogMessege={addMessegeDialog} addNewDialogMessege={addNewPost} dialogPage={state}/>
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewDialogMessege: (text) => {
            dispatch(updateNewDialogMessege(text));
        },
        addNewDialogMessege: () => {
            dispatch(addNewDialogMessege());
        }
    }
};
const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);
export default DialogsPageContainer;