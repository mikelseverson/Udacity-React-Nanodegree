import {
    POSTS_IS_LOADING,
    POSTS_RECEIVE,
    POST_IS_LOADING,
    POST_RECEIVE,
    POSTS_SORT,
    POST_DELETED,
} from '../actions'

import {
    POST_FORM_OPEN,
    POST_FORM_EDIT,
    POST_FORM_CLOSE,
    POST_FORM_SUCCESS
} from '../actions'

const initialState = {
    isFetching: false,
    data: []
}

export function posts(state = initialState, action) {
    let { isFetching, posts, post, sort, newPost } = action
    switch (action.type) {
        case POSTS_IS_LOADING:
            return {
                ...state,
                isFetching
            }
        case POSTS_RECEIVE:
            return {
                ...state,
                data: posts
            }
        case POST_IS_LOADING:
            return {
                ...state,
                isFetching
            }
        case POST_RECEIVE:
            return {
                ...state,
                data: [post]
            }
        case POST_DELETED:
            return {
                ...state,
                data: state.data.map(postObj => postObj.id === post.id ? post : postObj)
            }
        case POST_FORM_SUCCESS:
            return {
                ...state,
                data: newPost ? [post, ...state.data] : state.data.map(postObj => postObj.id === post.id ? post : postObj)
            }
        case POSTS_SORT:
            return {
                ...state,
                data: state.data
                    .sort((a, b) => {
                        switch (sort) {
                            case 'voteScore':
                                return b.voteScore - a.voteScore
                            case 'date':
                                return b.timestamp - a.timestamp
                            default: 
                                return 0
                        }
                    }),
                sort
                }
        default:
            return {...state}
    }
}

const postFormInitialState = {
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

export function postForm(state = postFormInitialState, action) {
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
                            ...postFormInitialState.post,
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
                ...postFormInitialState
            }
        default:
            return {
                ...state
            }
    }
}