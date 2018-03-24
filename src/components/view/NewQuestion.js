import React from "react";
import {Button, Text, View} from "react-native";
import t from 'tcomb-form-native';
import {connect} from "react-redux";
import {addCardToDeck} from "../action";
// import * as ToastAndroid from "react-native";

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
        const cardValue = JSON.parse(JSON.stringify(this._form.getValue()));

        //validate user input
        if(cardValue) {
            const deckTitle = this.props.navigation.state.params;
            this.props.addCardToDeck(deckTitle, cardValue);
            this.setState({value: null});
            this.props.navigation.goBack();
        }
    };

    render() {
        const deckTitle = this.props.navigation.state.params;
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.text}>Current deck: {deckTitle}</Text>

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

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#778DA9',
    },
    text: {
        fontSize: 25,
        paddingBottom: 30
    }
};

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    {addCardToDeck}
    )(NewQuestion)