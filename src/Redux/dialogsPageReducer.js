const ADD_NEW_DIALOG_MESSEGE = 'ADD-NEW-DIALOG-MESSEGE';
const UPDATE_NEW_DIALOG_MESSEGE = 'UPDATE-NEW-DIALOG-MESSEGE';

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_MESSEGE:
        let newMessege = {
            id: 4,
            messege: state.newDialogMessege
        };
        state.dialogMesseges.push(newMessege);
        state.newDialogMessege = '';
        return state;
        case UPDATE_NEW_DIALOG_MESSEGE:
            state.newDialogMessege = action.newText;
            return state;
        default:
            return state;
        }
    };


export const addNewDialogMessege = () => ({
    type: ADD_NEW_DIALOG_MESSEGE
});
export const updateNewDialogMessege = (text) => ({
    type: UPDATE_NEW_DIALOG_MESSEGE,
    newText: text
});

export default dialogPageReducer;