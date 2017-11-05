import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class CreateQuestion extends React.Component {
  state = {
    question: '',
    answer: '',
  }
  submitForm = state => {
    if(this.props.navigation.state.params.deckAddCard) {
      this.props.navigation.state.params.deckAddCard(
        this.props.navigation.state.params.deckTitle,
        state
      )
    }
  }

  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View>
        <TextInput 
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput 
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
        />
        <Button 
          title='submit new card' 
          onPress={() => this.submitForm(this.state)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})