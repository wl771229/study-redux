/**
 * Created by Administrator on 2019/6/26.
 */
export default function (state={},action) {
    switch (action.type){
        case 'CITY_UPDATE':{
            return{
                ...state,
                ...action.payload,
            }
        }
        case 'CITY_CLEAR':{
            return{}
        }
        default:{
            return state
        }
    }
}