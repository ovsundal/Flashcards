import {ADD_NEW_DECK, ADD_QUESTION_TO_DECK} from "../components/action/types";
const {List} = require('immutable');

export default function DeckReducer(state = {}, action) {
    switch (action.type) {

        case ADD_NEW_DECK: {
            return {...state, ...action.deck};
        }
        case ADD_QUESTION_TO_DECK: {

            // console.log('add question red called')
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