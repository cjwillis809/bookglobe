import { Dispatch } from "redux";
import BookApi from "../bookApi/BookApi";
import Book from "../model/Book";

// Action Types
export enum ActionTypes {
    ADD_BOOK = 'ADD_BOOK',
    DELETE_BOOK = 'DELETE_BOOK',
    GET_BOOKS = 'GET_BOOKS',
    LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS',
    LOGGED_IN = 'LOGGED_IN',
    LOGGED_OUT = 'LOGGED_OUT',
}

// Action Interfaces
export interface GetBooksAction { type: ActionTypes.GET_BOOKS }
export interface LoadBooksSuccessAction { books: Book[], type: ActionTypes.LOAD_BOOKS_SUCCESS}

export function getAllBooks(): GetBooksAction {
    return {
        type: ActionTypes.GET_BOOKS
    }
}

/**
 * Sends an action that books have been received
 * @param response books in JSON form
 */
export function receiveBooks(response: any): LoadBooksSuccessAction {
    return {
        books: response,
        type: ActionTypes.LOAD_BOOKS_SUCCESS
    }
}

export function fetchAllBooks(): any {
    return (dispatch: Dispatch) => {
        dispatch(getAllBooks())
        return BookApi.getAllBooks().then(json => dispatch(receiveBooks(json)))
    }
}

export type Action = GetBooksAction | LoadBooksSuccessAction