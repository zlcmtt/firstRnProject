import { combineReducers,createStore,applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Home from './reducer/home'
const loggerMiddleware = createLogger()
export default store = createStore(
    combineReducers({
        Home
    }),
    applyMiddleware( // 允许action异步
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
)