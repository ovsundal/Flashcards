import React from "react";
import {Button, Text, TextInput, View} from "react-native";
import {connect} from 'react-redux';
import {saveDeckTitle} from "../action/index";
import t from 'tcomb-form-native';

const Form = t.form.Form;
const nameOfNewDeck = t.struct({
    title: t.String
});

class NewDeck extends React.Component {

    constructor(props) {
        super(props);
    }

    //generate new deck, send it to action, reset state and navigate to singledeck view
    addNewDeckHandler = () => {

        const deckValue = JSON.parse(JSON.stringify(this._form.getValue()));

        //validate user input
        if (deckValue) {

            const newDeckTitle = Object.values(deckValue)[0];

            //construct new deck
            const newDeck =
                {
                    newDeckTitle:
                        {
                            questions: [],
                            title: newDeckTitle
                        }
                };

            this.props.saveDeckTitle(newDeck);
            this.props.navigation.goBack();
        }
    };

    render() {
        return (
            <View>
                <Text>Name of new deck:</Text>
                <Form
                    ref={c => this._form = c}
                    type={nameOfNewDeck}/>
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