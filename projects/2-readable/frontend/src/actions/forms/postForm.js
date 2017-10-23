import { 
    addPost,
    editPost,
} from '../../util/readableAPI'

export const POST_FORM_OPEN = 'POST_FORM_OPEN'
export const POST_FORM_EDIT = 'POST_FORM_EDIT'
export const POST_FORM_CLOSE = 'POST_FORM_CLOSE'
export const POST_FORM_SUBMITTING = 'POST_FORM_SUBMITTING'
export const POST_FORM_SUCCESS = 'POST_FORM_SUCCESS'

export const postFormSubmit = (post, newPost) => dispatch => {
    dispatch(postFormSubmitting(true))
    return (newPost ? 
            addPost(post) :
            editPost(post)
        ).then(post => dispatch(postFormSuccess(post, newPost)))
}

export const postFormOpen = post => ({
    type: POST_FORM_OPEN,
    post
})

export const postFormEdit = post => ({
    type: POST_FORM_EDIT,
    post
})

export const postFormClose = () => ({
    type: POST_FORM_CLOSE
})


export const postFormSubmitting = isSubmitting => ({
    type: POST_FORM_SUBMITTING,
    isSubmitting
})

export const postFormSuccess = (post, newPost) => ({
    type: POST_FORM_SUCCESS,
    post,
    newPost
})