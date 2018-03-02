import React from "react";
import {Button, Text, TextInput, View} from "react-native";
import {connect} from 'react-redux';
import {saveDeckTitle} from "../action/index";

class NewDeck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            questions: []
        }
    }
    //generate uuid for deck, store, and navigate to its SingleDeck view
    addNewDeckHandler = () => {

        //hard copy state
        const newDeck = {
            ...this.state
        };

        this.props.dispatch(saveDeckTitle(newDeck));
        this.state.title = '';
        this.props.navigation.navigate('SingleDeck', {newDeck});
    };

    render() {
        return (
            <View>
                <Text>Name of new deck:</Text>
                <TextInput
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <Button
                    onPress={this.addNewDeckHandler}
                    title='Add Deck'
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(NewDeck)