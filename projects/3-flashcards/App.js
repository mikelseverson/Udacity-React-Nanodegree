import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

/* Specific Requirements
* (DONE) Use create-react-native-app to build your project.
* Allow users to create a deck which can hold an unlimited number of cards.
* Allow users to add a card to a specific deck.
* The front of the card should display the question.
* The back of the card should display the answer.
* Users should be able to quiz themselves on a specific deck and receive a score once they're done.
* Users should receive a notification to remind themselves to study if they haven't already for that day.
*/

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Your Decks</Text>
        <FlatList
          data={[{key: 'deck 1'}, {key: 'deck 2'}]}
          renderItem={({item}) => 
            <View style={{height: 100, paddingTop: 20}}>
              <Text>{item.key}</Text>
              <Text>0 cards</Text>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
