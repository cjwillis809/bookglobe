import BookApi from '../bookApi/BookApi';
import IBook from '../model/Book'
import * as ActionTypes from './Actions';

const initialState : IBook[] = [
    {
        author:'JRR Martin',
        id: 0,
        name:'A song of Ice and Fire',
        page: 700,
        price: 12.20
    },
    {
        author:'Tolkien',
        id: 1,
        name:'The lord of the ring',
        page: 700,
        price: 12.20
    },
    {
        author:'JK Rowling',
        id: 2,
        name:'Harry Potter',
        page: 700,
        price: 12.20
    }
]

const books = (state = initialState, action: any) => {
    switch(action.type) {
        case ActionTypes.DELETE_BOOK:
            return state.filter(book => book.id !== action.bookId)
        default:
            return state;
    }
}

export default books;

export interface IState {
    state: IBook[];
}

export function loadBooksSuccess(bookArray: IBook[]) {
    return { type: 'LOAD_BOOKS_SUCCESS', bookArray }
}

export function loadBooks() {
    const foo = (dispatch: any) => {
        return BookApi.getAllBooks().then(bookArray => {
            dispatch(loadBooksSuccess(bookArray));
        }).catch(error => {
            throw(error);
        });
    }
    return foo;
}