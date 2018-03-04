import {GET_SINGLE_DECK} from "../components/action/types";

export default function singleDeckReducer(state = {}, action) {
    switch (action.type) {

        case GET_SINGLE_DECK: {
            return {...action.deck};
        }

        default: {
            return state;
        }
    }
}