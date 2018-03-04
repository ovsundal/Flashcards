import {ADD_CARD_TO_DECK, GET_SINGLE_DECK} from "../components/action/types";

export default function singleDeckReducer(state = {}, action) {
    switch (action.type) {

        case GET_SINGLE_DECK: {
            return {...action.deck};
        }

        case ADD_CARD_TO_DECK: {
            //this only updates singledeck view, how can i make it update decklist view? Count is wrong there
            return {...action.deck};
        }

        default: {
            return state;
        }
    }
}