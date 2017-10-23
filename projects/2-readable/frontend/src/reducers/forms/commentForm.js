import {
    COMMENT_FORM_OPEN,
    COMMENT_FORM_EDITED,
    COMMENT_FORM_CLOSE,
    COMMENT_FORM_SUCCESS,
} from '../../actions'

const initialState = {
    isEditing: false,
    submitEnabled: true,
    comment: {
        author: '',
        parentId: '',
        body: ''
    }
}

export function commentForm(state = initialState, action) {
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
                submitEnabled: comment.author.length > 0 && comment.body.length > 0,
                comment
            }
        case COMMENT_FORM_CLOSE:
            return {
                ...initialState,
            }
        case COMMENT_FORM_SUCCESS:
            return {
                ...initialState,
            }
        default:
            return {...state}
    }
}