
const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_USER':
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default:
            return state;
    }
}



export default authReducer;