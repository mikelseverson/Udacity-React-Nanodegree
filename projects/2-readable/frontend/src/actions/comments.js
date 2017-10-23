import { fetchComments, postComment, deleteComment } from '../util/readableAPI'

export const COMMENTS_IS_LOADING = 'COMMENTS_IS_LOADING'
export const COMMENTS_RECEIVE = 'COMMENTS_RECEIVE'
export const COMMENT_FORM_OPEN = 'COMMENT_FORM_OPEN'
export const COMMENT_FORM_EDITED = 'COMMENT_FORM_EDITED'
export const COMMENT_FORM_CLOSE = 'COMMENT_FORM_CLOSE'
export const COMMENT_FORM_SUCCESS = 'COMMENT_FORM_SUCCESS'
export const COMMENT_DELETED = 'COMMENT_DELETED'

export const commentsFetch = post => dispatch => {
    dispatch(commentsIsFetching(true))
    return fetchComments(post)
        .then(comments => dispatch(commentsReceive(comments)))
}

export const commentFormSubmit = (comment, isNewComment) => dispatch => {
    return postComment(comment)
        .then(comment => dispatch(commentFormSuccess(comment, isNewComment)))
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

export const commentFormOpen = (post, comment) => ({
    type: COMMENT_FORM_OPEN,
    post,
    comment
})

export const commentFormEdited = comment => ({
    type: COMMENT_FORM_EDITED,
    comment
})

export const commentFormClose = () => ({
    type: COMMENT_FORM_CLOSE
})

export const commentFormSuccess = (comment, isNewComment) => ({
    type: COMMENT_FORM_SUCCESS,
    comment,
    isNewComment
})

export const commentDeleted = comment => ({
    type: COMMENT_DELETED,
    comment
})