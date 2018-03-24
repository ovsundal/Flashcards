import NewDeck from "../view/NewDeck";
import {StackNavigator, TabNavigator} from "react-navigation";
import Decks from "../view/DeckList";
import SingleDeck from "../view/SingleDeck";
import NewQuestion from "../view/NewQuestion";
import StartQuiz from "../view/StartQuiz";

const Tabs = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {title: 'List of Decks'}
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {title: 'New Deck'}
    }
});


const Stack = StackNavigator({
    Home: {
        screen: Tabs
    },
    SingleDeck: {
        screen: SingleDeck,
    },
    NewQuestion: {
        screen: NewQuestion
    },
    StartQuiz: {
        screen: StartQuiz
    }
});

export default Stack;