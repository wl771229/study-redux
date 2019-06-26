//定义方法
import  * as userConstants from  '../constants/user.js'

export const login = (payload) => {
    return {
        type:userConstants.USER_LOGIN,
        payload
    }
}
export const logout = (payload) => {
    return {
        type:userConstants.USER_LOGOUT,
        payload
    }
}
export const update = (payload) => {
    return {
        type:userConstants.USER_UPDATE,
        payload
    }
}