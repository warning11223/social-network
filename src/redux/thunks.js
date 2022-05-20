import {
    followUserApi,
    getAuthMeApi,
    getUserProfileApi,
    getUsersApi,
    getUserStatusApi, savePhotoApi,
    unfollowUserApi, updateUserStatusApi
} from "../api/api";
import {
    changeUserStatus,
    followAction, savePhotoUser,
    setButtonFollow,
    setLoginUser,
    setProfileUser,
    setTotalCount,
    setUsers,
    unfollowAction, updateUserStatus
} from "./actions";


export const getUsersThunk = (currentPage, pageSize, setFetch) => {
    return async (dispatch) => {
        dispatch(setFetch(true));
        let response = await getUsersApi(currentPage, pageSize);

        dispatch(setUsers(response.items));
        dispatch(setTotalCount(response.totalCount));
        dispatch(setFetch(false));

    }
}

export const followUserThunk = (id) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, id, followUserApi, followAction)
    }
}

export const unfollowUserThunk = (id) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, id, unfollowUserApi, unfollowAction)
    }
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(setButtonFollow(true, id));

    let response = await apiMethod(id);

    if(response.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(setButtonFollow(false, id))
}

export const getAuthMeThunk = () => {
    return async (dispatch) => {
        const response = await getAuthMeApi();

        const { id, login, email } = response.data;

        if(response.resultCode === 0) {
            dispatch(setLoginUser(id, login, email))
        }
    }
}

export const getUserProfileThunk = (id) => {
    return async (dispatch) => {
        const response = await getUserProfileApi(id);

        dispatch(setProfileUser(response))
    }
}

export const getUserStatusThunk = (id) => {
    return async (dispatch) => {
        const response = await getUserStatusApi(id);

        dispatch(changeUserStatus(response));
    }
}

export const updateUserStatusThunk = (status) => {
    return async (dispatch) => {
        const response = await updateUserStatusApi(status);

        if(response.data.resultCode === 0) {
            dispatch(updateUserStatus(status))
        }
    }
}

export const savePhotoThunk = (photo) => {
    return async (dispatch) => {
        const response = await savePhotoApi(photo);

        if(response.resultCode === 0) {
            dispatch(savePhotoUser(response.data.photos));
        }
    }
}










