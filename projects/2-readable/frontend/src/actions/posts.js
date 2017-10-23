import { 
    fetchPosts, 
    fetchPost, 
    deletePost,
    votePost
} from '../util/readableAPI'

export const POSTS_IS_LOADING = 'POSTS_IS_LOADING'
export const POST_IS_LOADING = 'POST_IS_LOADING'
export const POSTS_RECEIVE = 'POSTS_RECEIVE'
export const POST_RECEIVE = 'POST_RECEIVE'
export const POSTS_SORT = 'POSTS_SORT'

export const POST_IS_DELETING = 'POST_IS_DELETING'
export const POST_DELETED = 'POST_DELETED'
export const POST_VOTING = 'POST_VOTING'

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

export const postDelete = post => dispatch => {
    dispatch(postIsDeleting(true))
    return deletePost(post)
        .then(post => dispatch(postDeleted(post)))
}

export const postVote = (post, option) => dispatch => {
    dispatch(postVoting(true))
    return votePost(post, option)
        .then(data => console.log(data))
}

export const postsIsFetching = isFetching => ({
    type: POSTS_IS_LOADING,
    isFetching
})

export const postsReceive = posts => ({
    type: POSTS_RECEIVE,
    posts
})

export const postReceive = post => ({
    type: POST_RECEIVE,
    post
})

export const postVoting = isVoting =>  ({
    type: POST_VOTING,
    isVoting
})

export const postIsFetching = isFetching => ({
    type: POST_IS_LOADING,
    isFetching
})

export const postIsDeleting = isDeleting => ({
    type: POST_IS_DELETING,
    isDeleting
})

export const postDeleted = post => ({
    type: POST_DELETED,
    post
})

export const postsSort = sort => ({
    type: POSTS_SORT,
    sort
})