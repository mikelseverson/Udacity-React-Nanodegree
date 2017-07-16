import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
    state = {
        query: '',
        books: [],
    }
    handleQueryChange = event => {
        let query = event.target.value
        this.setState({query: query})
        if(query.length) this.searchBooks(query)
            .then(books => this.removeDuplicateBooks(books))
            .then(books => this.setState({books: books}))
        else this.setState({books: []})
    }
    searchBooks = query => {
        return BooksAPI.search(query)
            .then(books => books instanceof Array ? books : [])
    }
    removeDuplicateBooks = books => {
        return books.filter((book, pos, books) => {
            return books.findIndex(_book => _book.id === book.id) === pos
        });
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            value={this.state.query}
                            onChange={this.handleQueryChange} 
                            placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map(book=> (<li key={book.id}><Book book={book}/></li>))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks