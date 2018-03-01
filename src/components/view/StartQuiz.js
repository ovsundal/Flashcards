import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";


class StartQuiz extends React.Component {

    render() {

        return (
            <View>
                <Text>START QUIZ VIEW</Text>
            </View>
        )
    }

}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(StartQuiz)