import React from "react";
import {Button, Text, TextInput, View} from "react-native";

export default class Decks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    addNewDeckHandler = {
      //add deck to redux here and pass to NewQuestion view
    };

    render() {
        return (
            <View>
                <Text>Name of new deck:</Text>
                <TextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    onPress={this.addNewDeckHandler}
                    title='Add Deck'
                />
            </View>
        )
    }
}