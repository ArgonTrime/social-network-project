import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '4b706b4c-7c99-4d0d-b85a-2aa4479071ce'}
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
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(responce => {return responce.data})
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(responce => {return responce.data})
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}).then(responce => {return responce.data})
    }
};