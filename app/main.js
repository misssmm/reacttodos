import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index'
import Header from './components/Header'
import Main from './components/main'
//任何对state的改变之前都会顺序执行中间件   logger 插件
let store = createStore(reducer,applyMiddleware(createLogger()))

render(
    <Provider store={store}>
        <div>
            <Header></Header>
            <Main></Main>
        </div>
    </Provider>
    ,
    document.getElementById("container")
)
