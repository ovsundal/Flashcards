import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Card, List} from "react-native-elements";
import {getDecks} from "../action";


class DeckList extends React.Component {

    constructor(props) {
        super(props);

        this.props.getDecks();
    }

    render() {
        const decks = this.props.decks;
        return (
            <View>
                {decks !== undefined
                && Object.values(decks).length > 0
                && <List>
                    <FlatList
                        data={decks}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SingleDeck')}>
                                <Card
                                    title={item.title}>
                                    <Text>Cards in deck: {item.questions.length}</Text>
                                </Card>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item, index) => index}
                    />
                </List>
                }
            </View>

        )
    }
}

function mapStateToProps({deckReducer}) {
    return {
        decks: Object.values(deckReducer)
    }
}

export default connect(
    mapStateToProps,
    {getDecks}
)(DeckList)
