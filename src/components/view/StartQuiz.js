import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getDeck} from "../action";
import {Card} from "react-native-elements";


class StartQuiz extends React.Component {

    constructor(props) {
        super(props);

        //get single deck details
        const deckTitle = this.props.navigation.state.params;
        this.props.getDeck(deckTitle)

        this.state = {
            currentScore: 0,
            cardIndex: 1
        }
    }

    handleAnswer = (type) => {
        const newState = {...this.state};

        if (type === 'correct') {
            newState.cardIndex++;
            newState.currentScore++;
        } else {
            newState.cardIndex++;
        }

        this.setState({
            ...newState
        })
    };

    render() {

        const {singleDeck} = this.props;
        const {cardIndex, currentScore} = this.state;
        return (
            <View>
                {Object.keys(singleDeck).length > 0
                && cardIndex <= singleDeck.questions.length
                &&
                <View>
                    <Text>{cardIndex} / {singleDeck.questions.length}</Text>
                    <Text>Score: {currentScore} / {singleDeck.questions.length}</Text>

                    {[singleDeck.questions[cardIndex - 1]].map((card) =>
                        <Card key={cardIndex - 1}>

                            <Text>Question: {card.question}</Text>
                            <Text>Answer: {card.answer}</Text>

                            <Button
                                title='Correct'
                                onPress={() => this.handleAnswer('correct')}
                            />
                            <Button
                                title='Incorrect'
                                onPress={() => this.handleAnswer('incorrect')}
                            />

                        </Card>
                    )}


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