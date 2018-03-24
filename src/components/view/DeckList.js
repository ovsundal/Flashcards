import React from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {Card, List} from "react-native-elements";
import {getDecks} from "../action";


class DeckList extends React.Component {

    constructor(props) {
        super(props);

        this.props.getDecks();
    }

    //cb from SingleDeck, updates card count
    handleOnNavigateBack = () => {
        this.props.getDecks();
    };

    render() {
        const decks = this.props.decks;
        return (
            <View style={styles.containerStyle}>
                {decks !== undefined
                && Object.values(decks).length > 0
                && <List>
                    <FlatList
                        data={decks}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate(
                                    'SingleDeck',
                                    {
                                        title: item.title,
                                        onNavigateBack: this.handleOnNavigateBack
                                    }
                                )}>
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

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#778DA9',
    }
};

function mapStateToProps({deckReducer}) {
    return {
        decks: Object.values(deckReducer)
    }
}

export default connect(
    mapStateToProps,
    {getDecks}
)(DeckList)
