import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Card, List} from "react-native-elements";


class DeckList extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.dispatch(fetchDecks())
    }

    render() {
        const decks = this.props.decks;
        console.log('from render')
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
    console.log('from decklist')
    console.log(deckReducer)
    return {
        decks: deckReducer
    }
}

export default connect(mapStateToProps)(DeckList)
