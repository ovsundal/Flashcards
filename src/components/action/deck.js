import {ADD_NEW_DECK, ADD_QUESTION_TO_DECK, GET_ALL_DECKS} from "./types";
import {addDeckToStorage, fetchDecksFromStorage} from '../util/StorageApi';

export const getDecks = () => dispatch =>
    fetchDecksFromStorage()
        .then((decks) => dispatch(
            {
                type: GET_ALL_DECKS,
                decks
            }
        ));

export const saveDeckTitle = (deck) => dispatch => {
    addDeckToStorage(deck)
        .then((decks) => dispatch(
            {
                type: ADD_NEW_DECK,
                decks
            }
        ));
};


export const addCardToDeck = (card, parentId) => {
    return {
        type: ADD_QUESTION_TO_DECK,
        card: card,
        parentId: parentId
    }
};


