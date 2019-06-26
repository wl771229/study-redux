/**
 * Created by Administrator on 2019/6/26.
 */

import {combineReducers} from 'redux'
import user from  './user'
import city from  './city'

export default combineReducers({
    user,
    city
})