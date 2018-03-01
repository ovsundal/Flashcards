import React from "react";
import {Button, Text, TextInput, View} from "react-native";
import t from 'tcomb-form-native';

//used this guide for creating form: https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
const Form = t.form.Form;

const Question = t.struct({
    question: t.String,
    answer: t.String
});

export default class NewQuestion extends React.Component {

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log(value)
    };

    render() {
        const deck = this.props.navigation.state.params;
        return(
            <View>
                <Text>Current deck: {deck.title}</Text>

                <Form
                    ref={c => this._form = c}
                    type={Question} />
                <Button
                title='Submit'
                onPress={this.handleSubmit}
                />

            </View>
        )
    }
}