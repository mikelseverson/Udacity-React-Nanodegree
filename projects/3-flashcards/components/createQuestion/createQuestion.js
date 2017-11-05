import React from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default class CreateQuestion extends React.Component {
  state = {
    question: '',
    answer: '',
  }
  submitForm = state => {
    if(!state.question || !state.answer) {
      this.setState(state => ({
        ...state, 
        errorMessage: 'Your card needs a question and an answer!'
      }))
    } else if(this.props.navigation.state.params.deckAddCard) {
      this.props.navigation.state.params.deckAddCard(
        this.props.navigation.state.params.deckTitle,
        { 
          answer: state.answer, 
          question: state.question
        }
      )
      this.props.navigation.goBack()
    }
  }

  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.question}
          style={styles.input}
          placeholder='question'
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput 
          value={this.state.answer}
          style={styles.input}
          placeholder='answer'
          onChangeText={(answer) => this.setState({answer})}
        />
        <Button 
          title='submit new card' 
          onPress={() => this.submitForm(this.state)}
        />
        <Text style={styles.errorMessage}>
          {this.state.errorMessage}
        </Text>
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
  input: {
    width: 200
  },
  errorMessage: {
    color: 'red'
  }
})