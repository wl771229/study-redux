import React,{ Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import * as userActions from './actions/user'




class App extends  Component{
constructor(){
    super()
    this.state = {
        status:true
    }
}
    goParent(){
        // Route.push('/parent')
    }
    login(){
        //触发action更新
        this.props.dispatch(userActions.login({
            accout:'123',
            name:'wulei',
            password:'123'
        }))
    }
    render(){

        const {user} = this.props;
        return (

                <div className="App">
                    <div>{user.isLogin?'欢迎你':'未登录'}</div>
                    <div onClick={this.login.bind(this)}>点击</div>

                </div>




        );
    }
}


//拿仓库里面的信息

export default connect((state) =>{
    return{
        user:state.user
    }
})(App);
