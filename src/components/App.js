import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks/SearchBooks'
import BookShelves from './BookShelves/BookShelves'
import './App.css'

class BooksApp extends React.Component {
  state = { 
    books: []
  }

  getBooks = () => BooksAPI.getAll()
      .then(books => this.setState({ books }))

  changeBookShelf = (book, shelf) => 
      BooksAPI.update(book, shelf)
      .then(books => this.getBooks())

  componentWillMount() {
    return this.getBooks()
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <BookShelves 
              books={this.state.books}
              changeBookShelf={(book, shelf) => this.changeBookShelf(book, shelf)}
            />
          )}
        />
        <Route 
          path="/search"
          render={() => (
            <SearchBooks 
              books={this.state.books}
              changeBookShelf={(book, shelf) => this.changeBookShelf(book, shelf)}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
