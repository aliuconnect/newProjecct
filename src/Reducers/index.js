import {combineReducers} from 'redux'
import AddTodo from './AddTodo'
import AddFriend from './AddFriend'


export default combineReducers({
    AddTodo:AddTodo,
    AddFriend:AddFriend,
})