import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers';

export default class DeckQuiz extends React.Component {

  state = {
    showQuestion: true,
    cards: this.props.navigation.state.params.deck.cards.sort(() => Math.random() - 0.5),
    currentCard: 0,
    correctAnswers: 0,
    showingAnswer: false,
    quizComplete: false,
  };

  onCorrect = () => {
    if(this.state.cards[this.state.currentCard+1]) {
      this.setState(state => ({
        ...state,
        currentCard: ++state.currentCard,
        showingAnswer: false,
        correctAnswers: ++state.correctAnswers
      }))
    } else {
      this.setState(state => ({
        ...state,
        correctAnswers: ++state.correctAnswers,
        showingAnswer: false,
        quizComplete: true,
      }))
      this.resetNotification()
    }
  }

  onIncorrect = () => {
    if(this.state.cards[this.state.currentCard+1]) {
      this.setState(state => ({
        ...state,
        showingAnswer: false,
        currentCard: ++state.currentCard
      }))
    } else {
      this.setState(state => ({
        ...state,
        showingAnswer: false,
        quizComplete: true,
      }))
      this.resetNotification()
    }
  }

  resetQuiz = () => {
    this.setState({
      showQuestion: true,
      cards: this.props.navigation.state.params.deck.cards.sort(() => Math.random() - 0.5),
      currentCard: 0,
      correctAnswers: 0,
      showingAnswer: false,
      quizComplete: false,
    })
  }

  resetNotification() {
    clearLocalNotification()
      .then(setLocalNotification);
  }

  toggleViewAnswer = () => {
    this.setState(state => ({
      ...state,
      showingAnswer: !state.showingAnswer
    }))
  }

  render() {
    const { navigate, goBack } = this.props.navigation; 
    return (
      <View style={styles.container}>
        {this.state.quizComplete && <View>
          <Text>Quiz Complete</Text>
          <Text>{ this.state.correctAnswers / this.state.cards.length * 100 + '% correct' }</Text>
          <Button 
            title='Return to Deck'
            onPress={() => goBack()}
          />
          <Button
            title="Play Again"
            onPress={() => this.resetQuiz()}
          />
        </View>
        }
        {!this.state.quizComplete && <View>
          <Text>Card {this.state.currentCard + 1} of {this.state.cards.length}</Text>
          {!this.state.showingAnswer ? 
            <Text>Question: {this.state.cards[this.state.currentCard].question}</Text> :
            <Text>Answer: {this.state.cards[this.state.currentCard].answer}</Text>
          }
          {this.state.currentCard > 0 && 
            <Text>{this.state.currentCard > 0 && (this.state.correctAnswers / this.state.currentCard) * 100 + '% correct' }</Text>
          }
          <Button 
            title={"View " + (this.state.showingAnswer ? 'Question' : 'Answer')}
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
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
})