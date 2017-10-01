import React from 'react'

class Book extends React.Component {

    onShelfChange = event => 
        this.props.changeBookShelf(this.props.book, event.target.value)

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundSize: '100% 100%', backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')' }}></div>
                    <div className="book-shelf-changer">
                    <select onChange={this.onShelfChange} value={this.props.book.shelf}>
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book