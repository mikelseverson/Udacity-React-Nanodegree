import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View style={styles.container}>
        <Button
          title="Create a deck"
          onPress={() => navigate('CreateDeck')}
          style={styles.deckCreateButton}
        />
        <FlatList
          style={styles.deckList}
          data={[
              {key: 'deck one'}, {key: 'deck 2'}, {key: 'deck 3'}, 
              {key: 'deck 4'},  {key: 'deck 5'},  {key: 'deck 6'}, 
              {key: 'deck 7'},  {key: 'deck 8'},  {key: 'deck 9'}, 
              {key: 'deck 10'}, {key: 'deck 11'}, {key: 'deck 12'},
              {key: 'deck 13'}, {key: 'deck 14'}, {key: 'deck 15'}, 
              {key: 'deck 14'}, {key: 'deck 2'},  {key: 'deck 3'}, 
              {key: 'deck 4'},  {key: 'deck 5'},  {key: 'deck 6'}, 
              {key: 'deck 7'},  {key: 'deck 8'},  {key: 'deck 9'}, 
              {key: 'deck 10'}, {key: 'deck 11'}, {key: 'deck 12'},
              {key: 'deck 13'}, {key: 'deck 14'}, {key: 'deck 15'}, 
            ]}
          renderItem={({item}) => 
            <View style={styles.deckItem}>
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
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24
  },
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  deckList: {
    alignSelf: 'stretch',
  },
  deckItem: {
    height: 100,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckCreateButton: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})