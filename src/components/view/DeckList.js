import React from "react";
import {FlatList, Text, View} from "react-native";
import {connect} from "react-redux";
import {List, ListItem} from "react-native-elements";

class Decks extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        const decks = this.props.decks;
        return (
            <View>
                {decks !== undefined
                && decks.length > 0
                && decks.map((deck) =>
                    <List>
                        <FlatList
                            data={deck}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                <ListItem
                                    roundAvatar
                                    title={`${item.title}`}
                                />
                            )}
                        />
                    </List>
                )}

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

export default connect(mapStateToProps)(Decks)
