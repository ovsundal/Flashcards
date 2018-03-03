import {ADD_NEW_DECK, ADD_QUESTION_TO_DECK, GET_ALL_DECKS} from "../components/action/types";
const {List} = require('immutable');

export default function DeckReducer(state = {}, action) {
    switch (action.type) {

        case GET_ALL_DECKS: {
            return {...state, ...action.decks};
        }

        case ADD_NEW_DECK: {
            return {...action.decks};
        }

        case ADD_QUESTION_TO_DECK: {

            console.log('add question red called')
            // console.log(action.card)
            // console.log(state)
            // console.log(action.card)

            const newState = List([...state].filter(deck => deck.id = action.parentId));

            // console.log(newState)
            // console.log(...newState)
            // console.log(...newState['questions'])
            // console.log(newState[0].questions)
            // newState.questions.push(action.card)



            return state;
        }
        default: {
            return state;
        }
    }
}