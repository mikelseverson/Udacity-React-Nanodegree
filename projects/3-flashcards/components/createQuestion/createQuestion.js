import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class CreateQuestion extends React.Component {
  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View>
          <TextInput value='question' />
          <TextInput value='answer' />
          <Button title='submit' />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})