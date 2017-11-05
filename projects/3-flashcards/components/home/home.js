import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { getDecks, getDeck, addCardToDeck } from '../../utils/api'
import { connect } from 'react-redux'
import { decksFetch, deckCreate, deckAddCard } from '../../actions/decks'

class Home extends React.Component {
  componentDidMount() {
    this.props.decksFetch()
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Create a deck"
          onPress={() => navigate('CreateDeck', {deckCreate: this.props.deckCreate})}
          style={styles.deckCreateButton}
        />
        <FlatList
          style={styles.deckList}
          data={this.props && this.props.decks ? Object.keys(this.props.decks).map(k => this.props.decks[k]) : [] }
          keyExtractor={(item) => item.title } 
          renderItem={({item}) => 
            <TouchableOpacity 
              style={styles.deckItem} 
              onPress={() => navigate('DeckView', { deckTitle: item.title })}>
              <Text>{item.title}</Text>
              <Text>{item.cards.length} cards</Text>
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

const mapDispatchToProps = dispatch => ({
  decksFetch: () => dispatch(decksFetch()),
  deckCreate: deckTitle => dispatch(deckCreate(deckTitle)),
  deckAddCard: (deckTitle, card) => dispatch(deckAddCard(deckTitle, card)),
})
const mapStateToProps = state => state
export default connect(mapStateToProps, mapDispatchToProps)(Home)