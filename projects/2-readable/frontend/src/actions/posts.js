import { fetchPosts, fetchPost } from '../util/readableAPI'

export const POSTS_IS_LOADING = 'POSTS_IS_LOADING'
export const POST_IS_LOADING = 'POST_IS_LOADING'
export const POSTS_RECEIVE = 'POSTS_RECEIVE'
export const POST_RECEIVE = 'POST_RECEIVE'
export const POST_ADD = 'POST_ADD'
export const POST_EDIT = 'POST_EDIT'
export const POST_REMOVE = 'POST_REMOVE'
export const POSTS_SORT = 'POSTS_SORT'

export const postsFetch = category => dispatch => {
    dispatch(postsIsFetching(true))
    return fetchPosts(category)
        .then(posts => dispatch(postsReceive(posts)))
}

export const postFetch = postId => dispatch => {
    dispatch(postIsFetching(true))
    return fetchPost(postId)
        .then(post => dispatch(postReceive(post)))
}

export const postsIsFetching = isFetching => ({
    type: POSTS_IS_LOADING,
    isFetching
})

export const postReceive = post => ({
    type: POST_RECEIVE,
    post
})

export const postIsFetching = isFetching => ({
    type: POST_IS_LOADING,
    isFetching
})

export const postsReceive = posts => ({
    type: POSTS_RECEIVE,
    posts
})

export const postsSort = sort => ({
    type: POSTS_SORT,
    sort
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