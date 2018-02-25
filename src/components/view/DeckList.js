import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Button, Card, List} from "react-native-elements";
import Deck from "../Deck";

// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

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
                            <Deck
                                id={item.id}
                                title={item.title}
                                numberOfCards={item.numberOfCards}
                            />
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
