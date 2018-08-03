import { ActionTypes } from "./Actions";

export interface AuthState {
    authenticated: boolean
}

export const authInitialState: AuthState = {
    authenticated: false
}

export function authReducer(state: AuthState = authInitialState, action: any) {
    switch(action.type) {
        case ActionTypes.LOGGED_IN:
            return { ...state, authenticated: true};
        case ActionTypes.LOGGED_OUT:
            return { ...state, authenticated: false};
        default:
            return state;
    }
}