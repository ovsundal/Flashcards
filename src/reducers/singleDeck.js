import {ADD_CARD_TO_DECK, GET_SINGLE_DECK} from "../components/action/types";

export default function singleDeckReducer(state = {}, action) {
    switch (action.type) {

        case GET_SINGLE_DECK: {
            return {...action.deck};
        }

        case ADD_CARD_TO_DECK: {

console.log('addcardtodeck REDUCER called, return this')
// console.log(state)
console.log(action.deck)
// console.log({...action.deck})
            return action.deck;
        }

        default: {
            return state;
        }
    }
}