import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '344a00d3-c1be-45ba-8911-4a30590ec2d2',
    },
})

export const getUsersApi = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(response => response.data)
}

export const unfollowUserApi = (id) => {
    return instance.delete(`follow/${id}` )
        .then(response => response.data)
}

export const followUserApi = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const getAuthMeApi = () => {
    return instance.get('auth/me')
        .then(response => response.data)
}

export const getUserProfileApi = (id) => {
    return instance.get(`profile/${id}`)
        .then(response => response.data)
}

export const getUserStatusApi = (id) => {
    return instance.get(`/profile/status/${id}`)
        .then(response => response.data)
}

export const updateUserStatusApi = (status) => {
    return instance.put('/profile/status', {status: status});
}

export const savePhotoApi = (photo) => {
    const formData = new FormData();
    formData.append('image', photo);

    return instance.put('/profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
        .then(response => response.data)
}















