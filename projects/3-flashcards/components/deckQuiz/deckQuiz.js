import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class DeckQuiz extends React.Component {

  shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

  state = {
    showQuestion: true,
    cards: this.shuffleArray( this.props.navigation.state.params.deck.cards ),
    currentCard: 0,
    correctAnswers: 0,
    showingAnswer: false,
  };

  onCorrect = () => {
    this.setState(state => ({
      ...state,
      currentCard: ++state.currentCard,
      correctAnswers: ++state.correctAnswers
    }))
  }

  onIncorrect = () => {
    this.setState(state => ({
      ...state,
      currentCard: ++state.currentCard
    }))
  }

  toggleViewAnswer = () => {
    this.setState(state => ({
      ...state,
      showingAnswer: !state.showingAnswer
    }))
  }

  render() {
    const { navigate } = this.props.navigation; 
    return (
      <View>
        <Text>{this.state.currentCard + 1} / {this.state.cards.length}</Text>
        <Text>Question: {this.state.cards[this.state.currentCard].question}</Text>
        <Text>Answer: {this.state.cards[this.state.currentCard].answer}</Text>
        <Text>{this.state.currentCard > 0 && (this.state.correctAnswers / this.state.currentCard) * 100 + '% correct' }</Text>
        <Button 
          title="View Answer"
          onPress={this.toggleViewAnswer}
        />
        <Button
          title="Correct"
          onPress={this.onCorrect}
        />
        <Button 
          title="Incorrect"
          onPress={this.onIncorrect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})