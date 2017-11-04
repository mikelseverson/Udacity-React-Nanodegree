import { AsyncStorage } from 'react-native'
const FLASHCARD_STORAGE_KEY = 'flashcards'

export async function getDecks () {
  return JSON.parse(await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY))
}

export async function getDeck (title) {
  var decks = await getDecks()
  return decks[title]
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(
      FLASHCARD_STORAGE_KEY, 
      JSON.stringify({
        [title] : {
          title,
          questions: [],
        }
      })
    )
}

export async function addCardToDeck (title, card) {
  var deck = await getDeck(title)
  deck.questions.push(card)
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [title] : deck
    })
  )
}