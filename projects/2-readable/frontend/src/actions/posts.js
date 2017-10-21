import { fetchPosts, fetchPost } from '../util/readableAPI'

export const POSTS_IS_LOADING = 'POSTS_IS_LOADING'
export const POST_IS_LOADING = 'POST_IS_LOADING'
export const POSTS_RECEIVE = 'POSTS_RECEIVE'
export const POST_RECEIVE = 'POST_RECEIVE'
export const POST_REMOVE = 'POST_REMOVE'
export const POSTS_SORT = 'POSTS_SORT'

export const POST_FORM_CREATE = 'POST_FORM_CREATE'
export const POST_FORM_EDIT = 'POST_FORM_EDIT'
export const POST_FORM_SUBMITTED = 'POST_FORM_SUBMITTED'
export const POST_FORM_CLOSE = 'POST_FORM_CLOSE'

export const postsFetch = category => dispatch => {
    dispatch(postsIsFetching(true))
    return fetchPosts(category)
        .then(posts => dispatch(postsReceive(posts)))
}

export const postSubmit = post => dispatch => {
    // dispatch(postIsSubmitting(true))

    // logic to dictate whether post is submitted new or not?

    // return submitPost(post)
    //     .then()
}

export const postFetch = postId => dispatch => {
    dispatch(postIsFetching(true))
    return fetchPost(postId)
        .then(post => dispatch(postReceive(post)))
}

export const postFormCreate = () => ({
    type: POST_FORM_CREATE
})

export const postFormEdit = post => ({
    type: POST_FORM_EDIT,
    post
})

export const postFormClose = () => ({
    type: POST_FORM_CLOSE
})

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

export const removePost = post => ({
    type: POST_REMOVE,
    post
})