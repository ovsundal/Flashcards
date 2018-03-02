import {ADD_NEW_DECK, ADD_QUESTION_TO_DECK} from "./types";

export const getDecks = decks => ({
    type: FETCH_DECKS,
    decks
});

export const saveDeckTitle = (deck) => {
    return {
        type: ADD_NEW_DECK,
        deck
    }
};

export const addCardToDeck = (card, parentId) => {
    return {
        type: ADD_QUESTION_TO_DECK,
        card: card,
        parentId: parentId
    }
};


