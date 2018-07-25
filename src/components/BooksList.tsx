import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import BookModel from '../model/Book';
import { AppState } from '../reducer';
import * as ActionTypes from '../store/Actions';
import Book from './Book'
import './BooksList.css'

interface BooksListProps {
    books: BookModel[],
    navigateToLogin: () => void,
    onBookClicked: (bookId: number) => void
}


class BooksList extends React.Component<BooksListProps> {
    constructor(props: BooksListProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <button onClick={() => this.props.navigateToLogin()}>Login</button>
                {this.props.books.map(book => (
                    <div key={book.id}><Book book={book} onBookClicked={ () => this.props.onBookClicked(book.id)}/></div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    books: state.currentBooks
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        navigateToLogin: () => push('/login'),
        onBookClicked: (id: number) => dispatch({type: ActionTypes.DELETE_BOOK, bookId: id})
    }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(BooksList)