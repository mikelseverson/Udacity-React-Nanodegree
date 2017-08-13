import React from 'react'
import Book from '../../common/Book'

class BookShelf extends React.Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.booksInShelf.map(book =>
                        <li key={book.id}>
                            <Book 
                                book={book} 
                                changeBookShelf={this.props.changeBookShelf}
                            />
                        </li>
                        )
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf