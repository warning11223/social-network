

const initialState = {
    messagesData: [
        {id: 1, text: 'Text 1'},
        {id: 2, text: 'Text 2'},
        {id: 3, text: 'Text 3'},
    ],
        dialogsData: [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
    ],
    value: '',
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DIALOG':
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, text: action.payload}],
            }
        case 'CHANGE_DIALOG_TEXTAREA':
            return {
                ...state,
                value: action.payload,
            }
        default:
            return state;
    }
}

export default messagesReducer;