import deckReducer from './deck'
import singleDeckReducer from './singleDeck'
import {combineReducers} from "redux";


export default combineReducers({
    deckReducer,
    singleDeckReducer

})