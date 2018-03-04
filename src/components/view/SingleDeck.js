import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getDeck} from "../action";


class SingleDeck extends React.Component {

    constructor(props) {
        super(props);

        //TODO: how to force rerender when navigating back?
        // https://github.com/react-navigation/react-navigation/issues/922#issuecomment-304827787
        // console.log(this.props.navigation.state.params.onNavigateBack());

        //get single deck details
        const deckTitle = this.props.navigation.state.params.title;
        this.props.getDeck(deckTitle)
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