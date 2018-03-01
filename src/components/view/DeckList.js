import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Card, List} from "react-native-elements";

class DeckList extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const decks = this.props.decks;
        return (
            <View>
                {decks !== undefined
                && decks.length > 0
                && <List>
                    <FlatList
                        data={decks}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={(item) => this.props.navigation.navigate('SingleDeck')}>
                                <Card
                                    keyExtractor={deck => deck.id}
                                    title={item.title}>
                                    <Text>Cards in deck: {item.numberOfCards}</Text>
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
        decks: deckReducer
    }
}

export default connect(mapStateToProps)(DeckList)
