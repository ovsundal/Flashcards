import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";


class SingleDeck extends React.Component {

    componentWillReceiveProps(props) {
        console.log(props)
    }

    render() {
        const deck = this.props.navigation.state.params.newDeck;

        return (
            <View>
                {deck.title &&
                <View>
                    <Text>{deck.title}</Text>
                    <Text>This deck has {deck.numberOfCards} cards</Text>
                    <Button
                    title='Create New Question'
                    />

                </View>}

            </View>
        )
    }

}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(SingleDeck)