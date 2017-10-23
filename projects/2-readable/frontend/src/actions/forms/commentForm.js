import { 
    postComment 
} from '../../util/readableAPI'

export const COMMENT_FORM_OPEN = 'COMMENT_FORM_OPEN'
export const COMMENT_FORM_EDITED = 'COMMENT_FORM_EDITED'
export const COMMENT_FORM_CLOSE = 'COMMENT_FORM_CLOSE'
export const COMMENT_FORM_SUCCESS = 'COMMENT_FORM_SUCCESS'

export const commentFormSubmit = (comment, isNewComment) => dispatch => {
    return postComment(comment)
        .then(comment => dispatch(commentFormSuccess(comment, isNewComment)))
}

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