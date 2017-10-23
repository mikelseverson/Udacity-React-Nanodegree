import { fetchComments, deleteComment, voteComment } from '../util/readableAPI'

export const COMMENTS_IS_LOADING = 'COMMENTS_IS_LOADING'
export const COMMENTS_RECEIVE = 'COMMENTS_RECEIVE'
export const COMMENT_DELETED = 'COMMENT_DELETED'
export const COMMENT_VOTED = 'COMMENT_VOTED'

export const commentsFetch = post => dispatch => {
    dispatch(commentsIsFetching(true))
    return fetchComments(post)
        .then(comments => dispatch(commentsReceive(comments)))
}

export const commentDelete = comment => dispatch => {
    return deleteComment(comment)
        .then(comment => dispatch(commentDeleted(comment)))
}

export const commentVote = (comment, option) => dispatch => {
    return voteComment(comment, option)
        .then(comment => dispatch(commentVoted(comment)))
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

export const commentVoted = comment => ({
    type: COMMENT_VOTED,
    comment
})