import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { saveDeckTitle } from '../../utils/api'

export default class CreateDeck extends React.Component {
  state = {
    title: ''
  }

  onSubmit = title => {
    if(this.props.navigation.state.params.deckCreate) {
      this.props.navigation.state.params.deckCreate(title)
    }
  }

  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View>
        <TextInput 
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <Button 
          title='submit'
          onPress={() => this.onSubmit(this.state.title)} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})