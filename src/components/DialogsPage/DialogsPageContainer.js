import React from 'react';
import {addNewDialogMessege, updateNewDialogMessege} from "../../Redux/dialogsPageReducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

// let AuthRedirectComponent = withAuthRedirect(DialogsPage);


// const DialogsPageContainer = connect(mapStateToProps, {
//     updateNewDialogMessege,
//     addNewDialogMessege
// })(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, {updateNewDialogMessege, addNewDialogMessege}),
    withAuthRedirect
)(DialogsPage);
// export default DialogsPageContainer;