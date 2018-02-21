import React from "react";
import {Button, Text, TextInput, View} from "react-native";
import {connect} from 'react-redux';
import {addNewDeck} from "../action/index";

class NewDeck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    addNewDeckHandler = () => {
        //add deck to redux here and pass to NewQuestion view

        const newDeck = this.state;
        this.props.dispatch(addNewDeck(newDeck));
    };

    render() {
        return (
            <View>
                <Text>Name of new deck:</Text>
                <TextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
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