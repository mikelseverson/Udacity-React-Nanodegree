import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class CreateQuestion extends React.Component {
  
  submitQuestion = () => {

  }

  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View>
        <TextInput value='question' />
        <TextInput value='answer' />
        <Button title='submit' onPress={() => {console.log('submit pressed')}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})