export const COMMENTS_FETCH = 'COMMENTS_FETCH'
export const COMMENT_ADD = 'COMMENT_ADD'
export const COMMENT_EDIT = 'COMMENT_EDIT'
export const COMMENT_REMOVE = 'COMMENT_REMOVE'
export const COMMENT_VOTE = 'COMMENT_VOTE'

export function commentsFetch(post) {
    return {
        type: COMMENTS_FETCH,
        post
    };
}

export function commentAdd(post, comment) {
    return {
        type: COMMENT_ADD,
        post,
        comment
    };
}

export function commentEdit(comment) {
    return {
        type: COMMENT_EDIT,
        comment
    };
}

export function commentRemove(comment) {
    return {
        type: COMMENT_REMOVE,
        comment
    };
}

export function commentVote(comment, vote) {
    return {
        type: COMMENT_VOTE,
        comment,
        vote
    };
}

// For when thunks are implemented

export function commentsHasErrored(bool) {
    return {
        type: 'COMMENTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function commentsIsFetching(bool) {
    return {
        type: 'COMMENTS_IS_LOADING',
        isFetching: bool
    };
}

export function commentsFetchSuccess(items) {
    return {
        type: 'COMMENTS_FETCH_SUCCESS',
        items
    };
}
