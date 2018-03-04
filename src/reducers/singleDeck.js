import {GET_SINGLE_DECK} from "../components/action/types";

export default function singleDeckReducer(state = {}, action) {
    switch (action.type) {

        case GET_SINGLE_DECK: {
            let singleDeck = {};
console.log('single deck reducer called')
console.log(state)
console.log(action)
            //find single deck and hard copy
            for (const key in state) {
                if (key === action.deck) {
                    singleDeck = {...state[key]};
                    break;
                }
            }

            return singleDeck;
        }

        default: {
            return state;
        }
    }
}