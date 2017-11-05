import { DECKS_RECEIVE } from '../actions/decks'

export function decks(state={}, action) {
    let { decks } = action
    switch(action.type) {
        case DECKS_RECEIVE: 
            return decks
        default: 
            return {...state}
    }
}
