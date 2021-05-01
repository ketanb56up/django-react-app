import axios from "axios";

import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    NULL_LOAD_USER_SUCCESS,
    NULL_ALL_AUTHOR_BOOK_SUCCESS,
    NULL_ALL_AUTHOR_BOOK_FAIL,
    NULL_LOAD_USER_FAIL,
} from "../Constant/userConstants";

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const { data } = await axios.post("/api/user/ ", userData);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const login = (loginDetails) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const { data } = await axios.post("/user/login/", loginDetails);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Load user
export const loadUser = (token) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get("/api/book/profile/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Logout user
export const logout = (refresh_token, token) => async (dispatch) => {
    try {
        const { data } = await axios.post("/user/logout/", { refresh_token }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(data)

        dispatch({
            type: LOGOUT_SUCCESS,
            payload: data.success,
        });

        dispatch({
            type: NULL_LOAD_USER_SUCCESS,
            payload: data.success,
        });

        dispatch({
            type: NULL_ALL_AUTHOR_BOOK_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message,
        });
        dispatch({
            type: NULL_ALL_AUTHOR_BOOK_FAIL,
            payload: error.response.data.message,
        });
        dispatch({
            type: NULL_LOAD_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};
// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
