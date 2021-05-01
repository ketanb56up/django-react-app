import {
    ADD_USER_BOOK_FAIL,
    ADD_USER_BOOK_REQUEST,
    ADD_USER_BOOK_SUCCESS,

    ALL_BOOK_FAIL,
    ALL_BOOK_REQUEST,
    ALL_BOOK_SUCCESS,
    AUTHOR_ALL_BOOK_FAIL,
    AUTHOR_ALL_BOOK_REQUEST,
    AUTHOR_ALL_BOOK_SUCCESS,
    UPDATE_BOOK_FAIL,
    UPDATE_BOOK_REQUEST,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_RESET,
    DELETE_BOOK_FAIL,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    ADD_USER_BOOK_RESET,
} from "../Constant/bookConstants";

import { CLEAR_ERRORS, NULL_ALL_AUTHOR_BOOK_SUCCESS } from "../Constant/userConstants";

export const bookReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADD_USER_BOOK_REQUEST:
            return {
                loading: true,
            };

        case ADD_USER_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                books: action.payload
            };
        case ADD_USER_BOOK_RESET:
            return {
                ...state,
                success: false
            }
        case ADD_USER_BOOK_FAIL:
            return {
                ...state,
                success: false,
                books: null,
                error: action.type,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
export const authorAllBookReducer = (state = { authorallbooks: [] }, action) => {
    switch (action.type) {
        case AUTHOR_ALL_BOOK_REQUEST:
            return {
                loading: true,
                authorallbooks: []
            }

        case AUTHOR_ALL_BOOK_SUCCESS:
            return {
                loading: false,
                authorallbooks: action.payload,
            }
        case NULL_ALL_AUTHOR_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                authorallbooks: action.payload,
            }

        case AUTHOR_ALL_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
export const updateBookReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_BOOK_REQUEST:
        case DELETE_BOOK_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case DELETE_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case UPDATE_BOOK_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case UPDATE_BOOK_FAIL:
        case DELETE_BOOK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}