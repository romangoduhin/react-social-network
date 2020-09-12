import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '5fafdf2e-a864-4d92-aeb4-b2674545b1ae'
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }
    ,
    unfollow(userId) {

        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)

    },

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    }
}

