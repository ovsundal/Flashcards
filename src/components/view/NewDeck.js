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

    //generate new deck, send it to action, reset state and navigate to singledeck view
    addNewDeckHandler = () => {

        const nameOfNewDeck = JSON.parse(JSON.stringify(this.state.title));
        const newDeck = {};
        newDeck[nameOfNewDeck] = {...this.state};

        this.props.saveDeckTitle(newDeck);
        this.state.title = '';
        this.props.navigation.navigate(
            'SingleDeck',
            {
                title: nameOfNewDeck
            }
        );
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

export default connect(
    mapStateToProps,
    {saveDeckTitle}
)(NewDeck)