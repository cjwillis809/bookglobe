import BookApi from '../bookApi/BookApi';
import Book from '../model/Book'
import { Action, ActionTypes } from "./Actions";

export interface BookState {
    currentBooks: Book[];
}

export const bookInitialState : BookState = {
    currentBooks: []
}

export function bookReducer(state = bookInitialState, action: Action) {
    switch(action.type) {
        // case ActionTypes.DELETE_BOOK:
        //     deleteBook(action.id);
        //     return state.currentBooks.filter(book => book.id !== action.bookId)
        case ActionTypes.LOAD_BOOKS_SUCCESS:
            return {...state, currentBooks: action.books}
        // case ActionTypes.ADD_BOOK:
        //     addBook(action);
        //     return state;
        case ActionTypes.GET_BOOKS:
        default:
            return state;
    }
}

export function loadBooksSuccess(bookArray: Book[]) {
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

export function addBook(book: Book) {
    const addBookFoo = (dispatch: any) => {
        return BookApi.addBook(book).then(response => {
            dispatch(loadBooks());
        }).catch(error => {
            throw(error);
        });
    }
    return addBookFoo;
}