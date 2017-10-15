
export const CATEGORIES_IS_LOADING = 'CATEGORIES_IS_LOADING'
export const CATEGORY_SET = 'CATEGORY_SET'
export const CATEGORIES_RECEIVE = 'CATEGORIES_RECEIVE'

const URL = `http://localhost:3001/categories`

export const categoriesFetch = () => dispatch => {
    dispatch(categoriesIsFetching(true))
    return fetch(URL, { headers: { 'Authorization': 'authman' } })
        .then(res => res.json())
        .then(res => dispatch(categoriesReceive(res.categories)))
}

export const categorySet = (category) => ({
        type: CATEGORY_SET,
        category
})

export const categoriesReceive = (categories) => ({
    type: CATEGORIES_RECEIVE,
    categories
})


// For when thunks are implemented

export function categoriesHasErrored(bool) {
    return {
        type: 'CATEGORIES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function categoriesIsFetching(bool) {
    return {
        type: 'CATEGORIES_IS_LOADING',
        isFetching: bool
    };
}

export function categoriesFetchSuccess(items) {
    return {
        type: 'CATEGORIES_FETCH_SUCCESS',
        items
    };
}