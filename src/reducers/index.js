import deckReducer from './deck'
import cardReducer from './card'
import {combineReducers} from "redux";


export default combineReducers({
    deckReducer,
    cardReducer
})