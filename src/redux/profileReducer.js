

const initialState = {
    postsData: [
        {id: 1, text: 'Post 1', likesCount: 1, dislikesCount: 5},
        {id: 2, text: 'Post 1', likesCount: 1, dislikesCount: 5},
        {id: 3, text: 'Post 1', likesCount: 1, dislikesCount: 5},
    ],
    value: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                postsData: [...state.postsData, {id: 4, text: action.payload, likesCount: 1, dislikesCount: 1}],
                value: '',
            }
        case 'CHANGE_TEXTAREA':
            return {
                ...state,
                value: action.payload,
            }
        case 'SET_PROFILE_USER':
            return {
                ...state,
                profile: action.payload
            }
        case 'CHANGE_USER_STATUS':
            return {
                ...state,
                status: action.payload,
            }
        case 'UPDATE_USER_STATUS':
            return {
                ...state,
                status: action.payload,
            }
        case 'SAVE_PHOTO_USER':
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}
            }
        default:
            return state;
    }
}

export default profileReducer;