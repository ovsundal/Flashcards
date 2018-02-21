import {ADD_NEW_DECK} from "./types";

export function addNewDeck(deck) {
    return {
        type: ADD_NEW_DECK,
        deck
    }
}
