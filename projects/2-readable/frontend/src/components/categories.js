import { fetchCategories } from '../util/readableAPI'

export const CATEGORIES_IS_LOADING = 'CATEGORIES_IS_LOADING'
export const CATEGORY_SET = 'CATEGORY_SET'
export const CATEGORIES_RECEIVE = 'CATEGORIES_RECEIVE'
 
export const categoriesFetch = () => dispatch => {
    dispatch(categoriesIsFetching(true))
    return fetchCategories()
        .then(categories => dispatch(categoriesReceive(categories)))
}

export const categorySet = category => ({
        type: CATEGORY_SET,
        category
})

export const categoriesIsFetching = isFetching => ({
    type: CATEGORIES_IS_LOADING,
    isFetching
})

export const categoriesReceive = categories => ({
    type: CATEGORIES_RECEIVE,
    categories
})