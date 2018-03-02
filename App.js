import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './src/reducers/index';
import Stack from "./src/components/navigation/Tabs";
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk)));

export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Stack />
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


