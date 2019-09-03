const ADD_NEW_DIALOG_MESSEGE = 'ADD-NEW-DIALOG-MESSEGE';
const UPDATE_NEW_DIALOG_MESSEGE = 'UPDATE-NEW-DIALOG-MESSEGE';

let initialState = {
    dialogList: [
        {id: 1, name: 'Ihar'},
        {id: 2, name: 'Julia'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Artem'}
    ],
    dialogMesseges: [
        {id: 1, messege: 'How a you?'},
        {id: 2, messege: 'Grate!'},
        {id: 3, messege: 'You upgrade React skill?'}
    ],
    newDialogMessege: ''
};

const dialogPageReducer = (state = initialState, action) => {
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