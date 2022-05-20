export const getUsers = state => {
    return state.usersReducer.users;
}
export const getTotalUsers = state => {
    return state.usersReducer.totalUsers;
}
export const getPageSize = state => {
    return state.usersReducer.pageSize;
}
export const getCurrentPage = state => {
    return state.usersReducer.currentPage;
}
export const getIsFetching = state => {
    return state.usersReducer.isFetching;
}
export const getIsButtonFollowing = state => {
    return state.usersReducer.isButtonFollowing;
}













