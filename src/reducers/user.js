//识别action，/触发事件
import * as uaerContants from  '../constants/user.js'
export default function (state={},action) {
    switch (action.type){
        case uaerContants.USER_LOGIN:{
                return{
                    ...state,
                    ...action.payload,
                    isLogin:true
                }
        }
        case uaerContants.USER_LOGOUT:{
            return{

                isLogin:false
            }
        }
        case uaerContants.USER_UPDATE:{
            return{
                ...state,
                ...action.payload
            }
        }
        default:{
            return state
        }
    }
}