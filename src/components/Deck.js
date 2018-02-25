import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {Card} from "react-native-elements";

export default function Deck(props) {
    return (
        <TouchableOpacity onPress={() => console.log(props.title)}>
            <Card
                keyExtractor={deck => deck.id}
                title={props.title}>
                <Text>Cards in deck: {props.numberOfCards}</Text>
            </Card>
        </TouchableOpacity>
    )
}