import { combineReducers } from 'redux';
import * as authState from './AuthReducer';
import * as bookState from './BookReducer';
import { AppState } from './index';


export interface AppState {
    authenticated: authState.AuthState,
    currentBooks: bookState.BookState
}

export const initialState: AppState = {
    authenticated: authState.authInitialState,
    currentBooks: bookState.bookInitialState
}

export const rootReducer = combineReducers<AppState>({
    authenticated: authState.authReducer,
    currentBooks: bookState.bookReducer
})