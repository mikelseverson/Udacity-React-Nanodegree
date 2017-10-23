import {
    POST_FORM_OPEN,
    POST_FORM_EDIT,
    POST_FORM_CLOSE,
    POST_FORM_SUCCESS
} from '../../actions'


const initialState = {
    isEditing: false,
    submitEnabled: false,
    newPost: true,
    post: {
        category: null,
        author: '',
        title: '',
        body: '',
        id: '',
    }
}

export function postForm(state = initialState, action) {
    let {post} = action
    switch(action.type) {
        case POST_FORM_OPEN:
            return post ? 
                {
                    isEditing: true,
                    newPost: false,
                    submitEnabled: post.author.length > 0 && post.body.length > 0,
                    post: {
                        ...post,
                    }
                } :
                {
                    isEditing: true,
                    newPost: true,
                    submitEnabled: state.newPost && state.post.category && state.post.author.length > 0 && state.post.title.length > 0 && state.post.body.length > 0,
                    post: state.newPost && state.post.id ? 
                        {
                            ...state.post
                        } : 
                        {
                            ...initialState.post,
                            id: ((((1+Math.random())*0x10000)|0).toString(16).substring(1)+'-'+(((1+Math.random())*0x10000)|0).toString(16).substring(1))
                        }
                }
        case POST_FORM_EDIT:
            return {
                ...state,
                submitEnabled: state.newPost ? post.category && post.author.length > 0 && post.title.length > 0 && post.body.length > 0 : post.author.length > 0 && post.body.length > 0,
                post: {
                    ...post,
                }
            }
        case POST_FORM_CLOSE:
            return {
                ...state,
                isEditing: false,
            }
        case POST_FORM_SUCCESS:
            return {
                ...initialState
            }
        default:
            return {
                ...state
            }
    }
}