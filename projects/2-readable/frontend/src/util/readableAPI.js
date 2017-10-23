const URL = `http://localhost:3001`
const headers = { 
    'Authorization': 'authman',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
 }

////////////////
/* Categories */
////////////////

export const fetchCategories = () => (
    fetch(`${URL}/categories`, { headers })
        .then(res => res.json())
        .then(res => res.categories)
)

///////////
/* Posts */
///////////

/*
 GET /posts
 USAGE:
  Get all of the posts. Useful for the main page when no category is selected.
*/
export const fetchPosts = category => {
    return fetch(URL + (category ? `/${category}/posts` : `/posts`), { headers })
        .then(res => res.json())
}

/*
 GET /posts/:id
  USAGE:
  Get the details of a single post
*/
export const fetchPost = postId => {
    return fetch(`${URL}/posts/${postId}`, { headers })
        .then(res => res.json())
};

/* 
 POST /posts
 USAGE:
  Add a new post
 PARAMS:
  post
    id - UUID should be fine, but any unique id will work
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like
    title - String
    body - String
    author - String
    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
*/
export const addPost = post => {
    return fetch(`${URL}/posts`, { headers, method: 'POST', body: JSON.stringify({...post, timestamp: Date.now()})})
        .then(res => res.json())
}

/* 
 PUT /posts/:id
 USAGE:
   Edit the details of an existing post
 PARAMS:
  post 
    title - String
    body - String
*/
export const editPost = post => {
    let {title, body} = post
    return fetch(`${URL}/posts/${post.id}`, { headers, method: 'PUT', body: JSON.stringify({title, body}) })
        .then(res => res.json())
}

/*
 POST /posts/:id
 USAGE:
  Used for voting on a post
 PARAMS:
  post
    id - post id
  option - String: Either "upVote" or "downVote"
*/
export const votePost = (post, option) => {
    return fetch(`${URL}/posts/${post.id}`, {headers, method: 'POST', body: JSON.stringify({option})})
        .then(res => res.json())
}

/*
 DELETE /posts/:id
 USAGE:
  Sets the deleted flag for a post to 'true'.
  Sets the parentDeleted flag for all child comments to 'true'.
*/
export const deletePost = post => {
    return fetch(`${URL}/posts/${post.id}`, {headers, method: 'DELETE'})
        .then(res => res.json())

}

//////////////
/* Comments */
//////////////

/*
 POST /comments
 USAGE:
  Add a comment to a post
 PARAMS:
  comment
    id: Any unique ID. As with posts, UUID is probably the best here.
    timestamp: timestamp. Get this however you want.
    body: String
    author: String
    parentId: Should match a post id in the database.
*/
export const postComment = comment => {
    return fetch(`${URL}/comments`, { headers, method: 'POST', body: JSON.stringify({...comment, timestamp: Date.now()}) })
        .then(res => res.json())
}

/*
 GET /posts/:id/comments
 USAGE:
  Get all the comments for a single post
 PARAMS
  POST
   id: string
*/
export const fetchComments = post => {
    return fetch(`${URL}/posts/${post.id}/comments`, { headers })
        .then(res => res.json())
}


/*
 POST /comments/:id
 USAGE:
  Used for voting on a comment.
 PARAMS:
  comment
    id: string
  option: string
*/
export const voteComment = (comment, option) => {
    return fetch(`${URL}/comments/${comment.id}`, { headers, method: 'POST', body: JSON.stringify({option}) })
        .then(res => res.json())
}

/*
 PUT /comments/:id
 USAGE:
  Edit the details of an existing comment
 PARAMS:
  comment 
    body: String
*/
export const editComment = comment => {
    return fetch(`${URL}/comments/${comment.id}`, { headers, method: 'PUT', body: JSON.stringify({ body: comment.body, timestamp: Date.now()}) })
        .then(res => res.json())
}

/*
 DELETE /comments/:id
 USAGE:
  Sets a comment's deleted flag to 'true'
*/
export const deleteComment = comment => {
    return fetch(`${URL}/comments/${comment.id}`, { headers, method: 'DELETE' })
        .then(res => res.json())
}