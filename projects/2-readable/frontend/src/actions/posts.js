export const POST_ADD = 'POST_ADD'
export const POSTS_FETCH = 'POSTS_FETCH'
export const POST_EDIT = 'POST_EDIT'
export const REMOVE_POST = 'REMOVE_POST'
export const POST_REMOVE = 'POST_REMOVE'


export function addPost(post) {
    return {
        type: POST_ADD,
        post
    }
}

export function editPost(post) {
    return {
        type: POST_EDIT,
        post
    }
}

export function removePost(post) {
    return {
        type: POST_REMOVE,
        post
    }
}

export function fetchPosts() {
    return {
        type: POSTS_FETCH,
    }
}

/* For when thunks are implemented */

export function postsHasErrored(bool) {
    return {
        type: 'POSTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function postsIsFetching(bool) {
    return {
        type: 'POSTS_IS_LOADING',
        isFetching: bool
    };
}

export function postsFetchSuccess(items) {
    return {
        type: 'POSTS_FETCH_SUCCESS',
        items
    };
}