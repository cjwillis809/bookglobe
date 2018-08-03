import * as React from 'react';
import { connect } from 'react-redux';
import Book from '../model/Book';
import { AppState } from '../store';
import { deleteBook } from '../store/BookReducer';
// import AddBookForm from './AddBook';
import BookComponent from './Book/Book'
import './BooksList.css'

interface BookListProps {
    books: Book[],
    onBookClicked: (bookId: number) => void,
}



class BooksList extends React.Component<BookListProps> {
    constructor(props: BookListProps) {
        super(props);
    }
    
    

    public render() {
        return (
            <div className="bookListDiv">
                {/* <AddBookForm /> */}
                {this.props.books.length > 0 && 
                    this.props.books.map(book => (
                        <div key={book.id}>
                            <BookComponent book={book} onBookClicked={ 
                                () => this.props.onBookClicked(book.id)}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    books: state.currentBooks.currentBooks
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        onBookClicked: (id: number) => dispatch(deleteBook(id))
    }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(BooksList)