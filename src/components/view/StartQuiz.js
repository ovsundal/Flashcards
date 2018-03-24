import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getDeck} from "../action";
import {Card} from "react-native-elements";
import Decks from "./DeckList";
import {setLocalNotification, clearLocalNotification} from "../util/Notification";


class StartQuiz extends React.Component {

    constructor(props) {
        super(props);

        //get single deck details
        const deckTitle = this.props.navigation.state.params;
        this.props.getDeck(deckTitle);

        //user started a quiz when component was invoked, reset notification
        clearLocalNotification().then(() => {
            setLocalNotification()
        });


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

    handleRestartQuiz = () => {
        this.setState({
            currentScore: 0,
            cardIndex: 0,
            viewAnswer: false
        })
    };

    handleBackToDeck = () => {
        this.props.navigation.navigate('Decks');
    };

    render() {
        const {singleDeck} = this.props;
        const {cardIndex, currentScore, viewAnswer} = this.state;
        return (
            <View style={styles.containerStyle}>
                <Text style={{fontSize: 25}}>{cardIndex} / {singleDeck.questions.length}</Text>
                {Object.keys(singleDeck).length > 0
                && cardIndex < singleDeck.questions.length
                &&
                <View>
                    {[singleDeck.questions[cardIndex]].map((card) =>
                        <Card key={cardIndex}>

                            <Text style={styles.text}>
                                Question: {card.question}
                            </Text>
                            <View style={styles.button}>
                                <Button
                                    title='View Answer'
                                    onPress={this.handleViewAnswer}
                                />
                            </View>
                            {/*only show answer if user clicks button*/}
                            {viewAnswer && <Text style={styles.answer}>{card.answer}</Text>}
                            <View style={styles.button}>
                                <Button
                                    title='Correct'
                                    onPress={() => this.handleCommitAnswer('correct')}
                                />
                            </View>
                            <View style={styles.button}>
                                <Button
                                    title='Incorrect'
                                    onPress={() => this.handleCommitAnswer('incorrect')}
                                />
                            </View>

                        </Card>
                    )}
                </View>
                }
                {cardIndex === singleDeck.questions.length
                &&
                <Card>
                    <Text style={styles.text}>{Math.round(100 * currentScore / singleDeck.questions.length)}%</Text>
                    <Text style={styles.text}>You answered {currentScore} of {singleDeck.questions.length} questions
                        correctly</Text>
                    <View style={styles.button}>
                        <Button
                            title='Restart Quiz'
                            onPress={this.handleRestartQuiz}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Back to Deck'
                            onPress={this.handleBackToDeck}
                        />
                    </View>
                </Card>
                }
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#778DA9',
    },
    text: {
        fontSize: 25,
        paddingBottom: 30
    },
    answer: {
        fontSize: 20,
        paddingBottom: 15
    },
    button: {
        paddingBottom: 30
    }
};

function mapStateToProps({singleDeckReducer}) {
    return {
        singleDeck: singleDeckReducer
    }
}

export default connect(
    mapStateToProps,
    {getDeck}
)(StartQuiz)