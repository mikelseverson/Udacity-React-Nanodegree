
export const CATEGORIES_FETCH = 'CATEGORIES_FETCH'
export const CATEGORY_SET = 'CATEGORY_SET'

export function categoriesFetch(data) {
    return {
        type: CATEGORIES_FETCH,
        data
    };
}

export function categorySet(category) {
    return {
        type: CATEGORY_SET,
        category
    };
}

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