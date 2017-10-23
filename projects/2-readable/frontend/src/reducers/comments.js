import {
    COMMENTS_IS_LOADING,
    COMMENTS_RECEIVE,
    COMMENT_FORM_OPEN,
    COMMENT_FORM_EDITED,
    COMMENT_FORM_CLOSE,
    COMMENT_FORM_SUCCESS,
    COMMENT_DELETED
} from '../actions'

const initialState = {
    isFetching: false,
    data: []
}

export function comments(state = initialState, action) {
    let {isFetching, comments, comment, isNewComment} = action
    switch (action.type) {
        case COMMENTS_IS_LOADING:
            return {
                ...state,
                isFetching
            }
        case COMMENTS_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: comments
            }
        case COMMENT_DELETED:
            return {
                ...state,
                data: state.data.map(commentObj => commentObj.id === comment.id ? comment : commentObj)
            }
        case COMMENT_FORM_SUCCESS: 
            return {
                ...state,
                data: isNewComment ? [comment, ...state.data] : state.data.map(commentObj => commentObj.id === comment.id ? comment : commentObj)
            }
        default:
            return {...state}
    }
}

const commentFormInitialState = {
    isEditing: false,
    submitEnabled: true,
    comment: {
        author: '',
        parentId: '',
        title: '',
        body: ''
    }
}

export function commentForm(state = commentFormInitialState, action) {
    let {post, comment} = action
    switch (action.type) {
        case COMMENT_FORM_OPEN:
            return {
                ...state,
                isEditing: true,
                isNewComment: !comment,
                submitEnabled: !!comment,
                comment: {
                    ...state.comment,
                    ...comment,
                    parentId: post.id,
                    id: comment ? comment.id : ((((1+Math.random())*0x10000)|0).toString(16).substring(1)+'-'+(((1+Math.random())*0x10000)|0).toString(16).substring(1))
                }
            }
        case COMMENT_FORM_EDITED:
            return {
                ...state,
                submitEnabled: comment.author.length > 0 && comment.title.length > 0 && comment.body.length > 0,
                comment
            }
        case COMMENT_FORM_CLOSE:
            return {
                ...commentFormInitialState,
            }
        case COMMENT_FORM_SUCCESS:
            return {
                ...commentFormInitialState,
            }
        default:
            return {...state}
    }
}