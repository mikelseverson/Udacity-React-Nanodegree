import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import { deckAddCard } from '../../actions/decks'

class DeckView extends React.Component {
  render() {
    const {navigate} = this.props.navigation; 
    const {deckTitle} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
          <Text>{deckTitle}</Text>
          <Text>{this.props.decks[deckTitle].cards.length} cards</Text>
          <Button title="Add Card" onPress={() => navigate('DeckAddQuestion', {deckAddCard: this.props.deckAddCard, deckTitle})}/>
          {!!this.props.decks[deckTitle].cards.length && 
            <Button 
              title="Start Quiz" 
              onPress={() => navigate('DeckQuiz', { deck : this.props.decks[deckTitle] })}
            />
          }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})

const mapDispatchToProps = dispatch => ({
  deckAddCard: (deckTitle, card) => dispatch(deckAddCard(deckTitle, card)),
})
export default connect(state => state, mapDispatchToProps)(DeckView)