import NewDeck from "../view/NewDeck";
import {StackNavigator, TabNavigator} from "react-navigation";
import Decks from "../view/DeckList";
import SingleDeck from "../view/SingleDeck";
import NewQuestion from "../view/NewQuestion";

const Tabs = TabNavigator({
    Decks: {
        screen: Decks
    },
    NewDeck: {
        screen: NewDeck
    }
});


const Stack = StackNavigator({
   Home: {
       screen: Tabs
   },
    SingleDeck: {
       screen: SingleDeck
    },
    NewQuestion: {
       screen: NewQuestion
    }
});

export default Stack;