const URL = `http://localhost:3001`
const headers = { 'Authorization': 'authman' }

export const fetchCategories = () => (
    fetch(`${URL}/categories`, { headers })
        .then(res => res.json())
        .then(res => res.categories)
)

export const fetchPosts = category => {
    return fetch(`${URL + (category ? `/${category}/posts` : `/posts`)}`, { headers })
        .then(res => res.json())
};