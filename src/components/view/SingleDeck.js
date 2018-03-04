import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getDeck} from "../action";


class SingleDeck extends React.Component {

    constructor(props) {
        super(props);

        //get single deck details
        const deckTitle = this.props.navigation.state.params;
        this.props.getDeck(deckTitle)
    }

    // componentWillReceiveProps(props) {
    //     console.log('from compwillrecprops')
    //     console.log(props)
    // }

    render() {
        // const {singleDeck} = this.props;
    // console.log('render called')
    // console.log(this.props)

        return (
            <View>
                {/*{deck.title &&*/}
                {/*<View>*/}

                    {/*<Text>This deck has {deck.numberOfCards} cards</Text>*/}
                    {/*<Button*/}
                        {/*onPress={() => this.props.navigation.navigate('NewQuestion', deck)}*/}
                        {/*title='Create New Question'*/}
                    {/*/><Button*/}
                        {/*onPress={() => this.props.navigation.navigate('StartQuiz', deck)}*/}
                        {/*title='Start quiz'*/}
                    {/*/>*/}

                {/*</View>}*/}

            </View>
        )
    }

}

function mapStateToProps({singleDeckReducer}) {
    // console.log('mapstate')
    // console.log(singleDeckReducer)

    return {
        singleDeck: Object.values(singleDeckReducer)
    }
}

export default connect(
    mapStateToProps,
    {getDeck}
    )(SingleDeck)