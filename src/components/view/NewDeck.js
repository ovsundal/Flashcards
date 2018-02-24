import React from "react";
import {Button, Text, TextInput, View} from "react-native";
import {connect} from 'react-redux';
import {addNewDeck} from "../action/index";
const uuidv1 = require('uuid/v1');

class NewDeck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: uuidv1(),
            title: '',
            numberOfCards: 0
        }
    }

    addNewDeckHandler = () => {

        const newDeck = this.state;
        this.props.dispatch(addNewDeck(newDeck));
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