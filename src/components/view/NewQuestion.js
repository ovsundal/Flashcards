import React from "react";
import {Button, Text, TextInput, View} from "react-native";

export default class NewQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const {deck} = this.props;
        return(
            <View>
                <Text>Name of Deck:</Text>
                <Text>{deck}</Text>

            </View>
        )
    }
}