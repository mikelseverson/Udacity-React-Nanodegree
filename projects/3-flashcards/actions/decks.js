const DECK_ADD_CARD = 'DECK_ADD_CARD'
const DECK_CREATE = 'DECK_CREATE'

export const deckAddCard = (card) => (dispatch) => ({
    type: DECK_ADD_CARD,
    card
})

export const deckCreate = (deck) => (dispatch) => ({
    type: DECK_CREATE,
    deck
})