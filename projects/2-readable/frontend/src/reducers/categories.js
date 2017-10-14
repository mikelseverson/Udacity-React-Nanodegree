import {
    CATEGORIES_FETCH,
} from '../actions'

const iniitialState = {
    isFetching: false,
    categories: [],
    posts: [],
    timestamp: '',
}

export function categories(state = iniitialState, action) {
    switch (action.type) {
        case CATEGORIES_FETCH:
            return {...state}
        case 'CATEGORIES_HAS_ERRORED':
            return {...state}
        case 'CATEGORIES_IS_LOADING':
            return {...state}
        case 'CATEGORIES_FETCH_SUCCESS':
            return {...state}
        default:
            return {...state}
    }
}