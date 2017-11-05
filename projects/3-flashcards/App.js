import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

import Home from './components/home/home'
import CreateDeck from './components/createDeck/createDeck'
import DeckQuiz from './components/deckQuiz/deckQuiz'
import DeckView from './components/deckView/deckView'
import CreateQuestion from './components/createQuestion/createQuestion'

/* Specific Requirements
* (DONE) Use create-react-native-app to build your project.
* (DONE) Allow users to create a deck which can hold an unlimited number of cards.
* Allow users to add a card to a specific deck.
* The front of the card should display the question.
* The back of the card should display the answer.
* Users should be able to quiz themselves on a specific deck and receive a score once they're done.
* Users should receive a notification to remind themselves to study if they haven't already for that day.
*/

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Your Decks',
    },
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      headerTitle: 'Create Deck',
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTitle: 'View Deck',
    },
  },
  DeckQuiz : {
    screen: DeckQuiz,
    navigationOptions: {
      headerTitle: 'Quiz',
    },
  },
  DeckAddQuestion : {
    screen: CreateQuestion,
    navigationOptions: {
      headerTitle: 'Add Question',
    },
  }
}, {
  navigationOptions: 
    { 
      headerStyle: { 
        ...Platform.select({
          android: {
            marginTop: Expo.Constants.statusBarHeight,
          },
        }),
      }
    }
  }
);

export default class app extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <RootNavigator />
      </Provider>
    )
  }
}