import {ADD_NEW_DECK} from "./types";

export const addNewDeck = (deck) => {
    return {
        type: ADD_NEW_DECK,
        deck
    }
};