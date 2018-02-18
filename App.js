import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './src/reducers'
import DeckList from "./src/components/views/DeckList";
import {Provider} from "react-redux";

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(rootReducer)}>
            <View style={styles.container}>
            <DeckList/>
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
