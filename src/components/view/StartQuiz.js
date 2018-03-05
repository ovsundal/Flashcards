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
            cardIndex: 0,
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

    restartQuiz = () => {
        this.setState({
            currentScore: 0,
            cardIndex: 0,
            viewAnswer: false
        })
    };


    render() {

        const {singleDeck} = this.props;
        const {cardIndex, currentScore, viewAnswer} = this.state;
        return (
            <View>
                <Text>{cardIndex} / {singleDeck.questions.length}</Text>
                {Object.keys(singleDeck).length > 0
                && cardIndex < singleDeck.questions.length
                &&
                <View>
                    {[singleDeck.questions[cardIndex]].map((card) =>
                        <Card key={cardIndex}>

                            <Text>Question: {card.question}</Text>

                            <Button
                                title='View Answer'
                                onPress={this.handleViewAnswer}
                            />
                            {/*only show answer if user clicks button*/}
                            {viewAnswer && <Text>{card.answer}</Text>}

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

                {/*TODO: show score screen when all questions are done*/}
                {cardIndex === singleDeck.questions.length
                &&
                <Card>
                    <Text>{100 * currentScore / singleDeck.questions.length}%</Text>
                    <Text>You answered {currentScore} of {singleDeck.questions.length} questions correctly</Text>
                    <Button
                        title='Restart Quiz'
                        onPress={this.restartQuiz}
                    />
                    <Button
                        title='Back to Deck'
                    />
                </Card>
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