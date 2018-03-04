import {ADD_NEW_DECK, ADD_CARD_TO_DECK, GET_ALL_DECKS, GET_SINGLE_DECK} from "./types";
import {addDeckToStorage, fetchDeckFromStorage, fetchDecksFromStorage} from '../util/StorageApi';

//retrieves all decks from storage
export const getDecks = () => dispatch =>
    fetchDecksFromStorage()
        .then((decks) => dispatch(
            {
                type: GET_ALL_DECKS,
                decks
            }
        ));

//retrieves a single deck from store
export const getDeck = (title) => dispatch => {

    fetchDeckFromStorage(title)
        .then((deck) => dispatch(
            {
                type: GET_SINGLE_DECK,
                deck: {...deck[0]}
            }
        ));
};

export const saveDeckTitle = (deck) => dispatch => {
    addDeckToStorage(deck)
        .then((decks) => dispatch(
            {
                type: ADD_NEW_DECK,
                decks
            }
        ));
};

export const addCardToDeck = (parentTitle, card) => dispatch => {
    addCardToDeck(parentTitle, card)
        .then((deck) => dispatch(
            {
                type: ADD_CARD_TO_DECK,
                deck
            }
        ))
};



