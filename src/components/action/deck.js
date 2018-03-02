import {ADD_NEW_DECK, ADD_QUESTION_TO_DECK} from "./types";

export const saveDeckTitle = (deck) => {
    return {
        type: ADD_NEW_DECK,
        deck
    }
};

export const addCardToDeck = (id, card) => {
    return {
        type: ADD_QUESTION_TO_DECK,
        deck: id,
        card: card
    }
};
