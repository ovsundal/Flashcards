import {ADD_QUESTION_TO_DECK} from "./types";

export const addCardToDeck = (card) => {
    return {
        type: ADD_QUESTION_TO_DECK,
        card: card
    }
};