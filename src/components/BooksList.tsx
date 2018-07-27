import * as React from 'react';
import { connect } from 'react-redux';
import BookModel from '../model/Book';
import { deleteBook } from '../store/Books';
import Book from './Book'
import './BooksList.css'

interface IProps {
    books: BookModel[],
    onBookClicked: (bookId: number) => void
}


class BooksList extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                {this.props.books.length > 0 && 
                    this.props.books.map(book => (
                        <div key={book.id}>
                            <Book book={book} onBookClicked={ 
                                () => this.props.onBookClicked(book.id)}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    books: state
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        onBookClicked: (id: number) => dispatch(deleteBook(id))
    }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(BooksList)