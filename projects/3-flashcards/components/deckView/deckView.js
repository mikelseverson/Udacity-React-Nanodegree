import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class DeckView extends React.Component {
  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View>
          <Text>Deck Name</Text>
          <Text># cards</Text>
          <Button title="Add Card" onPress={() => navigate('DeckAddQuestion')}/>
          <Button title="Start Quiz" onPress={() => navigate('DeckQuiz')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})