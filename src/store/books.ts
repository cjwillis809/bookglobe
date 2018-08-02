import BookApi from '../bookApi/BookApi';
import IBook from '../model/Book'
import * as ActionTypes from './Actions';

const initialState : IBook[] = [];

const books = (state = initialState, action: any) => {
    switch(action.type) {
        case ActionTypes.DELETE_BOOK: {
            deleteBook(action.id);
            return state.filter(book => book.id !== action.bookId)
        }
        case ActionTypes.LOAD_BOOKS_SUCCESS:
            return state = action.bookArray;
        case ActionTypes.ADD_BOOK:
            addBook(action);
            return state;
        default:
            return state;
    }
}

export default books;

export interface IState {
    state: IBook[];
}

export function loadBooksSuccess(bookArray: IBook[]) {
    return { type: ActionTypes.LOAD_BOOKS_SUCCESS, bookArray }
}

export function loadBooks() {
    const loadResult = (dispatch: any) => {
        return BookApi.getAllBooks().then(bookArray => {
            dispatch(loadBooksSuccess(bookArray));
        }).catch(error => {
            throw(error);
        });
    }
    return loadResult;
}

export function deleteBook(id: number) {
    const foo = (dispatch: any) => {
        return BookApi.deleteBook(id).then(response => {
            dispatch(loadBooks());
        }).catch(error => {
            throw(error);
        });
    }
    return foo;
}

export function addBook(book: IBook) {
    const addBookFoo = (dispatch: any) => {
        return BookApi.addBook(book).then(response => {
            dispatch(loadBooks());
        }).catch(error => {
            throw(error);
        });
    }
    return addBookFoo;
}