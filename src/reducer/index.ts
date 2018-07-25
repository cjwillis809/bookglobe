import Book from "../model/Book";
import * as ActionTypes from '../store/Actions';

export interface AppState {
    currentBooks: Book[]
}

export const initialState: AppState = {
    currentBooks: [
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
}

export function bookReducer(state: AppState = initialState, action: any) {
    switch(action.type) {
        case ActionTypes.DELETE_BOOK:
            return state.currentBooks.filter(book => book.id !== action.bookId)
    }
    return state;
}