import NewDeck from "../view/NewDeck";
import {TabNavigator} from "react-navigation";
import Decks from "../view/Decks";

export default Tabs = TabNavigator({
    'Decks': {
        screen: Decks,

    },
    'New Deck': {
        screen: NewDeck,
    }
});