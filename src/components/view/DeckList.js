import React from "react";
import {FlatList, Text, View} from "react-native";
import {connect} from "react-redux";
import {Card, List, ListItem} from "react-native-elements";

// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

class DeckList extends React.Component {


    constructor(props) {
        super(props);

    }

    _keyExtractor = (item, index) => item.id;

    render() {
        const decks = this.props.decks;
        return (
            <View>
                {decks !== undefined
                && decks.length > 0
                &&
                // && decks.map((deck) =>
                <List>
                    <FlatList
                        data={
                            decks
                        }
                        keyExtractor={deck => deck.id}
                        renderItem={({item}) =>
                            <Card title={item.title}>
                                <Text>Cards in deck: {item.numberOfCards}</Text>
                            </Card>
                        }
                    />
                </List>}

            </View>

        )
    }
}

function mapStateToProps({deckReducer}) {
    // console.log(deckReducer)
    return {
        decks: deckReducer
    }
}

export default connect(mapStateToProps)(DeckList)
