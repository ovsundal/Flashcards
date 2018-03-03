import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Card, List} from "react-native-elements";
import {fetchDecksFromStorage} from "../util/StorageApi"
import {getDecks} from "../action";


class DeckList extends React.Component {

    constructor(props) {
        super(props);

        this.props.getDecks();
    }

    render() {
        const decks = this.props.decks;
        console.log(decks)
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
                                    keyExtractor={deck => deck.id}
                                    title={item.title}>
                                    <Text>Cards in deck: {item.questions.length}</Text>
                                </Card>
                            </TouchableOpacity>
                        }
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
