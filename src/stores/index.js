/**
 * Created by Administrator on 2019/6/26.
 */
import { createStore} from 'redux';
//新的数据交给了仓库，更新视图
import reducer from  '../reducers/index'
export default function Store(initState) {

    return createStore(reducer,initState)
}