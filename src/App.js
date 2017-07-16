import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Route, Link} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Book from './Book'
import './App.css'

class BooksApp extends React.Component {
  state = { 
    shelfs :{
      currentlyReading: [],
      wantToRead: [],
      read: [],
    }
  }

  updateShelfs = () => {
    BooksAPI.getAll()
      .then(books => this.groupBooksIntoShelfs(books))
      .then(shelfs => this.setState({ shelfs: shelfs }))
  }

  groupBooksIntoShelfs = books => {
    let shelfs = {}
    books.map(book => shelfs[book.shelf] ? shelfs[book.shelf].push(book) : shelfs[book.shelf] = [book])
    return shelfs
  }

  changeBookShelf = () => { }

  componentDidMount() {
    return this.updateShelfs()
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.state.shelfs.currentlyReading.map(book => (
                          <li key={book.id}>
                            <Book book={book} />
                            </li>
                          ))
                        }
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.state.shelfs.wantToRead.map(book => (
                          <li key={book.id}>
                            <Book book={book} />
                            </li>
                          ))
                        }
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.state.shelfs.read.map(book => (
                          <li key={book.id}>
                            <Book book={book} />
                            </li>
                          ))
                        }
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link
                  to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
        <Route 
          path="/search"
          render={() => (
            <SearchBooks 
              shelfs={this.state.shelfs}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
