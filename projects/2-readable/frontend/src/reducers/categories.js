import {
    CATEGORIES_FETCH,
} from '../actions'

const initialState = {
    isFetching: false,
    data: [],
}

export function categories(state = initialState, action) {
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