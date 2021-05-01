import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,

    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    CLEAR_ERRORS,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    NULL_LOAD_USER_SUCCESS,

} from "../Constant/userConstants";

export const userReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case USER_REGISTER_REQUEST:
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };

        case USER_REGISTER_SUCCESS:
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case USER_REGISTER_FAIL:
        case USER_LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                users: null,
                error: action.type,
            };


        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                isSuccess: action.payload
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
export const loaduserReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                loaduser: action.payload,
            };

        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                loaduser: null,
                error: action.payload
            }

        case NULL_LOAD_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                loaduser: null
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
