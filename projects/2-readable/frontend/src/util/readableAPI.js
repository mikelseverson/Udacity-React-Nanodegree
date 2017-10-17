const URL = `http://localhost:3001`
const headers = { 'Authorization': 'authman' }

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
  id - UUID should be fine, but any unique id will work
  timestamp - timestamp in whatever format you like, you can use Date.now() if you like
  title - String
  body - String
  author - String
  category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
*/
export const addPost = post => {
    return fetch(`${URL}/posts`, { headers })
}

/* 
 PUT /posts/:id
 USAGE:
   Edit the details of an existing post
 PARAMS:
   title - String
 body - String
*/
export const editPost = post => {
    return fetch(`${URL}/posts/${post.id}`, { headers })
}

/*
 POST /posts/:id
 USAGE:
  Used for voting on a post
 PARAMS:
  option - String: Either "upVote" or "downVote"
*/
export const votePost = post => {
    return fetch()
}

/*
 DELETE /posts/:id
 USAGE:
  Sets the deleted flag for a post to 'true'.
  Sets the parentDeleted flag for all child comments to 'true'.
*/
export const deletePost = post => {

}

//////////////
/* Comments */
//////////////

/*
 POST /comments
 USAGE:
  Add a comment to a post
 PARAMS:
  id: Any unique ID. As with posts, UUID is probably the best here.
  timestamp: timestamp. Get this however you want.
  body: String
  author: String
  parentId: Should match a post id in the database.
*/
export const postComment = comment => {
    return fetch(`${URL}`, { headers })
}

/*
 GET /posts/:id/comments
 USAGE:
  Get all the comments for a single post
*/
export const fetchComments = post => {
    return fetch(`${URL}/posts/${post.id}/comments`, { headers })
        .then(res => res.json())
}

/*
 GET /comments/:id
 USAGE:
  Get the details for a single comment
*/
export const fetchComment = comment => {

}

/*
 POST /comments/:id
 USAGE:
  Used for voting on a comment.
*/
export const voteComment = comment => {

}

/*
 PUT /comments/:id
 USAGE:
  Edit the details of an existing comment
 PARAMS:
  timestamp: timestamp. Get this however you want.
  body: String
*/
export const editComment = comment => {

}

/*
 DELETE /comments/:id
 USAGE:
  Sets a comment's deleted flag to 'true'
*/
export const deleteComment = comment => {

}