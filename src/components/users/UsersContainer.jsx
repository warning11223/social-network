import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    changePage,
    followAction,
    setButtonFollow,
    setFetching,
    setTotalCount,
    setUsers,
    unfollowAction
} from "../../redux/actions";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import {followUserThunk, getUsersThunk, unfollowUserThunk} from "../../redux/thunks";
import {
    getCurrentPage,
    getIsButtonFollowing,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers
} from "../../redux/users-selectors";



const UsersContainer = ({
                              users,
                              setUsers,
                              pageSize,
                              currentPage,
                              changeCurrentPage,
                              setTotalCount,
                              followUser,
                              unfollowUser,
                              totalUsers,
                              isFetching,
                              setFetch,
                              isButtonFollowing,
                              setButtonFollow,
                              getUsersThunk,
                              followUserThunk,
                              unfollowUserThunk,
                          }) => {

    useEffect(() => {
        if(users.length === 0) {
            getUsersThunk(currentPage, pageSize, setFetch);
        }
    }, [])

    const onChangeCurrentPage = (id) => {
        getUsersThunk(id, pageSize, setFetch);

       /* setFetch(true);
        getUsersApi(id, pageSize)
            .then(data => {
                setUsers(data.items);
                setFetch(false);
            })*/

        changeCurrentPage(id);
    }


    return (
            <>
                {isFetching ? <Preloader /> : <Users
                    onChangeCurrentPage={onChangeCurrentPage}
                    users={users}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                    totalUsers={totalUsers}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    isButtonFollowing={isButtonFollowing}
                    setButtonFollow={setButtonFollow}
                    followUserThunk={followUserThunk}
                    unfollowUserThunk={unfollowUserThunk}
                />}
            </>
        )

};

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isButtonFollowing: getIsButtonFollowing(state),
    }
}

export default connect(mapStateToProps, {
    setUsers,
    followUser: followAction,
    unfollowUser: unfollowAction,
    changeCurrentPage: changePage,
    setTotalCount,
    setFetch: setFetching,
    setButtonFollow,
    getUsersThunk,
    followUserThunk,
    unfollowUserThunk,

})(UsersContainer);
