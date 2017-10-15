import {
    CATEGORIES_IS_LOADING,
    CATEGORIES_RECEIVE
} from '../actions'

const initialState = {
    isFetching: false,
    data: [],
}

export function categories(state = initialState, action) {
    let {isFetching, categories} = action
    switch (action.type) {
        case CATEGORIES_IS_LOADING:
            return {
                ...state,
                isFetching
            }
        case CATEGORIES_RECEIVE:
            return {
                ...state,
                data: categories
            }
        default:
            return {...state}
    }
}