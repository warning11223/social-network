import avatar from '../img/user.png'

const initialState = {
    users: [],
    totalUsers: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isButtonFollowing: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.payload) {
                        return {...item, followed: true};
                    }
                    return item;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.payload) {
                        return {...item, followed: false};
                    }
                    return item;
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.payload],
            }
        case 'CHANGE_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalUsers: action.payload,
            }
        case 'SET_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'SET_BUTTON_FOLLOW':
            return {
                ...state,
                isButtonFollowing: action.payload
                    ? [...state.isButtonFollowing, action.id]
                    : state.isButtonFollowing.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export default usersReducer;