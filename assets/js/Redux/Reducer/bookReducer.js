import {
    ADD_USER_BOOK_FAIL,
    ADD_USER_BOOK_REQUEST,
    ADD_USER_BOOK_SUCCESS,
} from "../Constant/bookConstants";
import { CLEAR_ERRORS } from "../Constant/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADD_USER_BOOK_REQUEST:
            return {
                loading: true,
            };

        case ADD_USER_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                book: action.payload
            };

        case ADD_USER_BOOK_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                users: null,
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
