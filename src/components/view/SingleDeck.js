import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getDeck} from "../action";
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";


class SingleDeck extends React.Component {

    constructor(props) {
        super(props);

        //if hardware 'back' button leads to decklist, rerender the list / do nothing if back leads to NewDeck view
        BackHandler.addEventListener('hardwareBackPress', () => {
            if(this.props.navigation.state.params.onNavigateBack) {
                this.props.navigation.state.params.onNavigateBack(this.handleOnNavigateBack);
            }
        });

        //get single deck details
        const deckTitle = this.props.navigation.state.params.title;
        this.props.getDeck(deckTitle)
    }

    componentWillUnmount() {
        if(this.props.navigation.state.params.onNavigateBack) {
            this.props.navigation.state.params.onNavigateBack(this.handleOnNavigateBack);
        }

    }

    addNewCardHandler = (title) => {
        this.props.navigation.navigate('NewQuestion', title);

    };

    startQuizHandler = (title) => {
        this.props.navigation.navigate('StartQuiz', title);
    };

    render() {
        const {singleDeck} = this.props;

        return (
            <View>
                {/*if object is not empty, render the deck*/}
                {Object.keys(singleDeck).length > 0
                    &&
                    <View>
                        <Text>Current deck: {singleDeck.title}</Text>
                        <Text>Number of cards: {singleDeck.questions.length}</Text>
                        <Button
                            title='Add new question'
                            onPress={() => this.addNewCardHandler(singleDeck.title)}
                            /><Button
                            title='Start quiz'
                            onPress={() => this.startQuizHandler(singleDeck.title)}
                            />
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
)(SingleDeck)