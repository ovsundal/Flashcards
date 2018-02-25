import {ADD_NEW_DECK, GET_SINGLE_DECK} from "./types";

export const addNewDeck = (deck) => {
    return {
        type: ADD_NEW_DECK,
        deck
    }
};
