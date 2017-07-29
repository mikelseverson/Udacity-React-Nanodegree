import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelves from './BookShelves'
import './App.css'

class BooksApp extends React.Component {
  state = { 
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    }
  }

  getShelves = () => BooksAPI.getAll()
      .then(books => this.groupBooksIntoShelvesByValue(books))
      .then(shelves => this.setState({ shelves }))

  changeBookShelf = (book, shelf) => BooksAPI.update(book, shelf)
      .then(shelvesMap => this.groupBooksIntoShelvesWithMap(this.getBooksFromShelves(this.state.shelves), shelvesMap))
      .then(shelves => this.setState({ shelves }))

  getBooksFromShelves = shelves => {
      let books = []
      Object.values(shelves).map(_books => books = books.concat(_books))
      return books
  }

  groupBooksIntoShelvesByValue = books => {
    let shelves = {}
    books.map(book => shelves[book.shelf] 
              ? shelves[book.shelf].push(book) 
              : shelves[book.shelf] = [book])
    return shelves
  }

  groupBooksIntoShelvesWithMap = (books, shelvesMap) => {
    let shelves = {}
    Object.keys(shelvesMap).map(shelfType => {
      return shelvesMap[shelfType].map(bookId => {
        shelves[shelfType] = shelves[shelfType] ? shelves[shelfType] : []
        return books.map(book => {
          if(book.id === bookId) { 
            book.shelf = shelfType
            shelves[shelfType].push(book)
          }
        })
      })
    })
    return shelves
  }

  componentWillMount() {
    return this.getShelves()
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <BookShelves 
              shelves={this.state.shelves}
              changeBookShelf={(book, shelf) => this.changeBookShelf(book, shelf)}
            />
          )}
        />
        <Route 
          path="/search"
          render={() => (
            <SearchBooks 
              shelves={this.state.shelves}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
