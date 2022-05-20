export const addPost = (post) => ({type: 'ADD_POST', payload: post});
export const changeTextarea = (text) => ({type: 'CHANGE_TEXTAREA', payload: text});
export const changeDialog = (text) => ({type: 'CHANGE_DIALOG', payload: text});
export const changeDialogTextarea = (dialog) => ({type: 'CHANGE_DIALOG_TEXTAREA', payload: dialog});

export const followAction = (id) => ({type: 'FOLLOW', payload: id});
export const unfollowAction = (id) => ({type: 'UNFOLLOW', payload: id});
export const setUsers = (users) => ({type: 'SET_USERS', payload: users});

export const changePage = (id) => ({type: 'CHANGE_PAGE', payload: id});
export const setTotalCount = (number) => ({type: 'SET_TOTAL_COUNT', payload: number});

export const setFetching = (value) => ({type: 'SET_FETCHING', payload: value});

export const setProfileUser = (user) => ({type: 'SET_PROFILE_USER', payload: user});

export const setLoginUser = (id, login, email) => ({type: 'SET_LOGIN_USER', payload: {id, login, email}});

export const setButtonFollow = (value, id) => ({type: 'SET_BUTTON_FOLLOW', payload: value, id: id});

export const changeUserStatus = (status) => ({type: 'CHANGE_USER_STATUS', payload: status});
export const updateUserStatus = (status) => ({type: 'UPDATE_USER_STATUS', payload: status});

export const savePhotoUser = (photo) => ({type: 'SAVE_PHOTO_USER', payload: photo});