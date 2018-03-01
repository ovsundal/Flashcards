import React from "react";
import {Button, Text, TextInput, View} from "react-native";

export default class NewQuestion extends React.Component {


    render() {
        const deck = this.props.navigation.state.params;
        return(
            <View>
                <Text>Current deck: {deck.title}</Text>

                <Text></Text>

            </View>
        )
    }
}