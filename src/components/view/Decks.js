import React from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";

const {List} = require('immutable');

class Decks extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        const decks = this.props.decks;
        return (
            <View>
                {decks !== undefined
                && decks.length > 0
                && decks.map((deck) =>
                    <Text>{deck.text}</Text>
                )}
            </View>
        )
    }
}

function mapStateToProps({deckReducer}) {
    // console.log(deckReducer)
    return {
        decks: deckReducer
    }
}

export default connect(mapStateToProps)(Decks)
