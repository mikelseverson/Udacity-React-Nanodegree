import { combineReducers } from 'redux'

/* Reducers */
import { categories } from './categories'
import { posts } from './posts'
import { comments } from './comments'
import { routerReducer } from 'react-router-redux'

/* Actions */
import { CATEGORY_SET } from '../actions'

function activeCategory(state = '', action) {
    switch (action.type) {
        case CATEGORY_SET:
            return action.category
        default:
            return state
    }
}

export default combineReducers({
    activeCategory,
    categories,
    posts,
    comments,
    router: routerReducer
});