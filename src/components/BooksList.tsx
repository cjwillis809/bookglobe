import * as React from 'react';
import BookModel from '../model/Book';
import Book from './Book'
import './BooksList.css'

interface IProps {
    books: BookModel[]
}

class BooksList extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                {this.props.books.map(book => (
                    <div key={book.id}><Book book={book} /></div>
                ))
                }
                <p />
            </div>
        )
    }
}

export default BooksList;