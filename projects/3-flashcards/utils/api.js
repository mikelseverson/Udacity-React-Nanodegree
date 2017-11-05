import { AsyncStorage } from 'react-native'
const FLASHCARD_STORAGE_KEY = 'FlashCards'

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
          cards: [],
        }
      })
    )
}

export async function addCardToDeck (title, card) {
  console.log(title, card)
  var deck = await getDeck(title)
  deck.cards.push(card)
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [title] : deck
    })
  )
}