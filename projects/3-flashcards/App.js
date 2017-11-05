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
import { setLocalNotification } from './utils/helpers'

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
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <RootNavigator />
      </Provider>
    )
  }
}