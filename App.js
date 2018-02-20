import React from 'react';
import {StyleSheet, View} from 'react-native';
import Decks from "./src/components/view/Decks";
import NewDeck from "./src/components/view/NewDeck";
import {TabNavigator} from "react-navigation";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './src/reducers/index';


export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(rootReducer)}>
            <View style={styles.container}>
                <Tabs />
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const Tabs = TabNavigator({
    'Decks': {
        screen: Decks,
        // }
    },
    'Add Entry': {
        screen: NewDeck,
    }
});
