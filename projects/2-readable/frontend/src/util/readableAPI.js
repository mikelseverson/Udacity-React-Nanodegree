const URL = `http://localhost:3001/categories`

export const fetchCategories = category => (
    fetch(URL, { headers: { 'Authorization': 'authman' } })
        .then(res => res.json())
        .then(res => res.categories)
)