import { fetchPosts } from '../util/readableAPI'

export const POSTS_IS_LOADING = 'POSTS_IS_LOADING'
export const POSTS_RECEIVE = 'POSTS_RECEIVE'
export const POST_ADD = 'POST_ADD'
export const POST_EDIT = 'POST_EDIT'
export const POST_REMOVE = 'POST_REMOVE'

export const postsFetch = category => dispatch => {
    dispatch(postsIsFetching(true))
    return fetchPosts(category)
        .then(posts => dispatch(postsReceive(posts)))
}

export const postsIsFetching = isFetching => ({
    type: POSTS_IS_LOADING,
    isFetching
})

export const postsReceive = posts => ({
    type: POSTS_RECEIVE,
    posts
})

export const addPost = post => ({
    type: POST_ADD,
    post
})

export const editPost = post => ({
    type: POST_EDIT,
    post
})

export const removePost = post => ({
    type: POST_REMOVE,
    post
})