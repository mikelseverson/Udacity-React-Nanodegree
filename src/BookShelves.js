import React from 'react'
import Book from './common/Book'
import { Link} from 'react-router-dom'

class BookShelves extends React.Component {

    render() {
        return (
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
                        {this.props.shelves.currentlyReading && this.props.shelves.currentlyReading.map(book => (
                          <li key={book.id}>
                            <Book 
                                book={book} 
                                changeBookShelf={this.props.changeBookShelf}
                            />
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
                        {this.props.shelves.wantToRead && this.props.shelves.wantToRead.map(book => (
                          <li key={book.id}>
                            <Book 
                                book={book} 
                                changeBookShelf={this.props.changeBookShelf}
                            />
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
                        {this.props.shelves.read && this.props.shelves.read.map(book => (
                          <li key={book.id}>
                            <Book 
                                book={book} 
                                changeBookShelf={this.props.changeBookShelf}
                            />
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
        )
    }
}

export default BookShelves