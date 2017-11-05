import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from '../utils/api'
export const DECKS_RECEIVE = 'DECKS_RECEIVE'

export const deckAddCard = (deckTitle, card) => dispatch => addCardToDeck(deckTitle, card)
                .then(() => dispatch(decksFetch()))

export const deckCreate = (deckTitle) => dispatch => saveDeckTitle(deckTitle)
                .then(() => dispatch(decksFetch()))

export const decksFetch = () => dispatch => getDecks()
                .then(decks => dispatch(decksReceive(decks)))

export const decksReceive = decks => ({
    type: DECKS_RECEIVE,
    decks
})