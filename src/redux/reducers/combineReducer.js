import {combineReducers} from 'redux';
import { exampleReducer } from "./ExampleReducer"

export default combineReducers({
    example: exampleReducer
})
