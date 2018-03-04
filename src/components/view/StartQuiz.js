import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getDeck} from "../action";


class StartQuiz extends React.Component {

    constructor(props) {
        super(props);

        //get single deck details
        const deckTitle = this.props.navigation.state.params;
        this.props.getDeck(deckTitle)
    }

    render() {

        const {singleDeck} = this.props;

        return (
            <View>
                {Object.keys(singleDeck).length > 0
                &&
                <View>
                    <Text>0 / {singleDeck.questions.length}</Text>
                    {singleDeck.questions.map((card) =>
                        <View>
                            <Text>Question: {card.question}</Text>
                            <Text>Answer: {card.answer}</Text>
                        </View>)}
                </View>
                }

            </View>
        )
    }

}

function mapStateToProps({singleDeckReducer}) {
    return {
        singleDeck: singleDeckReducer
    }
}

export default connect(
    mapStateToProps,
    {getDeck}
    )(StartQuiz)