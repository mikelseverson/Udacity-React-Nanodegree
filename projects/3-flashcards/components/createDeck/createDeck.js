import React from 'react';
import { StyleSheet, View, Button, TextInput, Text} from 'react-native';
import { saveDeckTitle } from '../../utils/api'

export default class CreateDeck extends React.Component {
  state = {
    title: '',
    errorMessage: ''
  }

  onSubmit = title => {
    if(!title) {
      this.setState(state => ({...state, errorMessage: 'Your deck needs a title!' }))
    } else if(this.props.navigation.state.params.deckCreate) {
      this.props.navigation.state.params.deckCreate(title)
      this.props.navigation.goBack()
    }
  }

  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Create a new deck
        </Text>
        <TextInput 
          style={styles.titleInput}
          placeholder="History Final Exam"
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <Button 
          title='submit'
          onPress={() => this.onSubmit(this.state.title)} 
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 27,
    paddingBottom: 30,
  },
  titleInput: {
    width: 200,
    paddingBottom: 10,
  },
  errorMessage: {
    color: 'red'
  }
})