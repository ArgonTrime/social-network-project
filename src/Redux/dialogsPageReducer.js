const ADD_NEW_DIALOG_MESSEGE = 'social-network-project/dialogs/ADD-NEW-DIALOG-MESSEGE';

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
    ]
};

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_MESSEGE: {
            let newMessege = {
                id: 4,
                messege: action.newMessageBody
            };
            return {
                ...state,
                dialogMesseges: [...state.dialogMesseges, newMessege]
            }
        }
        default:
            return state;
    }
};


export const addNewDialogMessege = (newMessageBody) => ({type: ADD_NEW_DIALOG_MESSEGE, newMessageBody});
export default dialogPageReducer;