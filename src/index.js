import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import Store from  './stores'
import * as serviceWorker from './serviceWorker';


const store = Store({

    user:{
        isLogin:false
    },
    city:{
        "023":'重庆'
    }
})

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
