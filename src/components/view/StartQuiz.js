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
            cardIndex: 1,
            viewAnswer: false
        }
    }

    handleCommitAnswer = (type) => {
        const newState = {...this.state};

        if (type === 'correct') {
            newState.currentScore++;
        }

        newState.cardIndex++;
        newState.viewAnswer = false;

        this.setState({
            ...newState
        })
    };

    handleViewAnswer = () => {
        this.setState({
            viewAnswer: true
        })

    };

    render() {

        const {singleDeck} = this.props;
        const {cardIndex, currentScore, viewAnswer} = this.state;
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

                            <Button
                                title='View Answer'
                                onPress={this.handleViewAnswer}
                            />
                            {/*only show answer if user clicks button*/}
                            {viewAnswer &&<Text>{card.answer}</Text>}

                            <Button
                                title='Correct'
                                onPress={() => this.handleCommitAnswer('correct')}
                            />
                            <Button
                                title='Incorrect'
                                onPress={() => this.handleCommitAnswer('incorrect')}
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