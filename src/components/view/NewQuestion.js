import React from "react";
import {Button, Text, View} from "react-native";
import t from 'tcomb-form-native';
import {connect} from "react-redux";
import {addCardToDeck} from "../action";

//used this guide for creating form: https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
const Form = t.form.Form;
const Question = t.struct({
    question: t.String,
    answer: t.String
});

//add question to deck, and clear form
class NewQuestion extends React.Component {

    //extract form data, add parentId, dispatch and clear form
    handleNewCardSubmit = () => {
        const card = JSON.parse(JSON.stringify(this._form.getValue()));
        const deckTitle = this.props.navigation.state.params;

        this.props.addCardToDeck(deckTitle, card);
        this.setState({value: null});
        this.props.navigation.goBack();
    };

    render() {
        const deckTitle = this.props.navigation.state.params;
        return(
            <View>
                <Text>Current deck: {deckTitle}</Text>

                <Form
                    ref={c => this._form = c}
                    type={Question} />
                <Button
                title='Submit'
                onPress={this.handleNewCardSubmit}
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
    {addCardToDeck}
    )(NewQuestion)