import React from 'react';
import {addNewDialogMessege} from "../../Redux/dialogsPageReducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};



export default compose(
    connect(mapStateToProps, {addNewDialogMessege}),
    withAuthRedirect
)(DialogsPage);
