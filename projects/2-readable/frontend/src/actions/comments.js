import { fetchComments, deleteComment } from '../util/readableAPI'

export const COMMENTS_IS_LOADING = 'COMMENTS_IS_LOADING'
export const COMMENTS_RECEIVE = 'COMMENTS_RECEIVE'
export const COMMENT_DELETED = 'COMMENT_DELETED'

export const commentsFetch = post => dispatch => {
    dispatch(commentsIsFetching(true))
    return fetchComments(post)
        .then(comments => dispatch(commentsReceive(comments)))
}

export const commentDelete = comment => dispatch => {
    return deleteComment(comment)
        .then(comment => dispatch(commentDeleted(comment)))
}

export const commentsIsFetching = isFetching => ({
    type: COMMENTS_IS_LOADING,
    isFetching
})

export const commentsReceive = comments => ({
    type: COMMENTS_RECEIVE,
    comments
})

export const commentDeleted = comment => ({
    type: COMMENT_DELETED,
    comment
})