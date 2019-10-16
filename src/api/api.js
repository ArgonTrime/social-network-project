import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '7d417c86-3bda-46f1-960b-2714178bf314'}
});

export const componentsAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            })
    },
    getLogin() {
        return instance.get(`auth/me`).then(responce => {return responce.data})
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(responce => {return responce.data})
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(responce => {return responce.data})
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(responce => {return responce.data})
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(responce => {return responce.data})
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then(responce => {return responce.data})

    }
};