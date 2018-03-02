import {ADD_NEW_DECK, ADD_QUESTION_TO_DECK} from "../components/action/types";
const {List} = require('immutable');

export default function DeckReducer(state = [], action) {
    switch (action.type) {

        case ADD_NEW_DECK: {
            return List([...state, action.deck]).toArray();
        }
        default: {
            return state;
        }
    }
}