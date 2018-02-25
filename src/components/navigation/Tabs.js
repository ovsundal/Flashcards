import NewDeck from "../view/NewDeck";
import {StackNavigator, TabNavigator} from "react-navigation";
import Decks from "../view/DeckList";

const DeckStack = StackNavigator({
    Decks: {screen: Decks}
});

const NewDeckStack = StackNavigator({
    NewDeck: {screen: NewDeck}
});


export default Tabs = TabNavigator(
    {
        Decks: {screen: DeckStack},
        NewDeck: {screen: NewDeckStack}
    });