import React from "react";
import {FlatList, Text, TouchableOpacity, View, Animated} from "react-native";
import {connect} from "react-redux";
import {Card, List} from "react-native-elements";
import {getDecks} from "../action";


class DeckList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(1)
        };

        this.props.getDecks();
    }

    doAnimationAndChangeScreen(title) {

        Animated.timing(
            this.state.opacity,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start(() => {
            this.props.navigation.navigate(
                'SingleDeck',
                {
                    title: title,
                    onNavigateBack: this.handleOnNavigateBack
                }
            );
            this.setState({opacity: new Animated.Value(1)})
        });
    }

    //cb from SingleDeck, updates card count
    handleOnNavigateBack = () => {
        this.props.getDecks();
    };

    render() {
        const {opacity} = this.state;
        const decks = this.props.decks;
        return (
            <Animated.View style={[styles.containerStyle, {opacity}]}>
                {decks !== undefined
                && Object.values(decks).length > 0
                && <List>
                    <FlatList
                        data={decks}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() =>
                                this.doAnimationAndChangeScreen(item.title)
                            }>
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
            </Animated.View>

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
