import {ADD_NEW_DECK, ADD_CARD_TO_DECK, GET_ALL_DECKS, GET_SINGLE_DECK} from "../components/action/types";

export default function deckReducer(state = {}, action) {
    switch (action.type) {

        case GET_ALL_DECKS: {
            console.log('GET_ALL_DECKS reducer called')
            console.log(state)
            console.log(action.decks)
            return {...state, ...action.decks};
        }

        case ADD_NEW_DECK: {
            return {...action.decks};
        }

        default: {
            return state;
        }
    }
}