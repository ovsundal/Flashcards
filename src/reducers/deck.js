import {ADD_NEW_DECK, ADD_CARD_TO_DECK, GET_ALL_DECKS, GET_SINGLE_DECK} from "../components/action/types";

export default function deckReducer(state = {}, action) {
    switch (action.type) {

        case GET_ALL_DECKS: {
            return {...state, ...action.decks};
        }

        case ADD_NEW_DECK: {
            return {...action.decks};
        }

        // case GET_SINGLE_DECK: {
        //     let singleDeck = {};
        //
        //     //find single deck and hard copy
        //     for (const key in state) {
        //         if (key === action.deck) {
        //             singleDeck = {...state[key]};
        //             break;
        //         }
        //     }
        //
        //     return singleDeck;
        // }

        case ADD_CARD_TO_DECK: {


            return state;
        }
        default: {
            return state;
        }
    }
}