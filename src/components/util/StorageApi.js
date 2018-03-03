import {AsyncStorage} from 'react-native';
export const DECK_KEY = 'flashcards';

const data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};

export function fetchDecksFromStorage() {
    return AsyncStorage.getItem(DECK_KEY).then(results => {
        return results === null ? feedInitialData() : JSON.parse(results)
    });
}

export function feedInitialData() {
    AsyncStorage.setItem(DECK_KEY, JSON.stringify(data));
    return data;
}