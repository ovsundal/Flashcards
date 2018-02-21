import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './src/reducers/index';
import Tabs from "./src/components/navigation/Tabs";


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


