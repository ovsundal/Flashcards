import {ADD_NEW_DECK, ADD_QUESTION_TO_DECK, GET_ALL_DECKS} from "./types";
import {fetchDecksFromStorage} from '../util/StorageApi';

export const getDecks = () => dispatch =>

    fetchDecksFromStorage()
        .then((decks) => dispatch(
            {
                type: GET_ALL_DECKS,
                decks
            }
        ));

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


