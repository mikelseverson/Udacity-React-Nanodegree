import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from '../../utils/api'

export default class Home extends React.Component {
  state = {
    decks: [],
  }

  componentDidMount() {
    getDecks()
      .then(decks => Object.keys(decks).map(k => decks[k]))
      .then(decks => this.setState({decks}))
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Create a deck"
          onPress={() => navigate('CreateDeck')}
          style={styles.deckCreateButton}
        />
        <FlatList
          style={styles.deckList}
          data={ this.state.decks }
          renderItem={({item}) => 
            <TouchableOpacity 
              style={styles.deckItem} 
              onPress={() => navigate('DeckView', {post: item})}>
              <Text>{item.title}</Text>
              <Text>0 cards</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24
  },
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  deckList: {
    alignSelf: 'stretch',
  },
  deckItem: {
    height: 100,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckCreateButton: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})