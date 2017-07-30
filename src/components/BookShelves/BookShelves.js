import React from 'react'
import BookShelf from './BookShelf/BookShelf'
import { Link} from 'react-router-dom'

class BookShelves extends React.Component {

    render() {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                  <BookShelf
                    bookshelfTitle='Currently Reading'
                    changeBookShelf={this.props.changeBookShelf}
                    booksInShelf={
                      this.props.books.filter(
                          book => book.shelf === 'currentlyReading'
                      )}
                  />
                  <BookShelf
                    bookshelfTitle='Want to Read'
                    changeBookShelf={this.props.changeBookShelf}
                    booksInShelf={
                      this.props.books.filter(
                          book => book.shelf === 'wantToRead'
                      )}
                  />
                  <BookShelf
                    bookshelfTitle='Read'
                    changeBookShelf={this.props.changeBookShelf}
                    booksInShelf={
                      this.props.books.filter(
                          book => book.shelf === 'read'
                      )}
                  />
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