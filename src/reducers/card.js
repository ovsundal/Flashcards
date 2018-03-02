import {ADD_QUESTION_TO_DECK} from "../components/action/types";
import {List} from "immutable";

export default function CardReducer(state = [], action) {
    switch (action.type) {

        case ADD_QUESTION_TO_DECK: {
            return List([...state, action.card]).toArray();
        }
        default: {
            return state;
        }
    }
}