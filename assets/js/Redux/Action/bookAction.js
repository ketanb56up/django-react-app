import axios from "axios";
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

    DELETE_BOOK_FAIL,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    UPDATE_BOOK_FAIL,
    UPDATE_BOOK_REQUEST,
    UPDATE_BOOK_SUCCESS,

} from "../Constant/bookConstants";

export const addBook = (bookdata, token) => async (dispatch) => {
    try {
        dispatch({ type: ADD_USER_BOOK_REQUEST });

        const { data } = await axios.post(
            "http://localhost:8000/api/book/", bookdata, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        );

        dispatch({
            type: ADD_USER_BOOK_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADD_USER_BOOK_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const authorAllBooks = (token) => async (dispatch) => {
    try {
        dispatch({ type: AUTHOR_ALL_BOOK_REQUEST });

        const { data } = await axios.get("/api/book/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch({
            type: AUTHOR_ALL_BOOK_SUCCESS,
            payload: data,
        });

    } catch (error) {

        dispatch({
            type: AUTHOR_ALL_BOOK_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete Books
export const deleteBook = (token, id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_BOOK_REQUEST })

        const { data } = await axios.delete(`/api/book/${id}/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({
            type: DELETE_BOOK_SUCCESS,
            payload: data.success
        })
        console.log("Delete Data", data.success)
    } catch (error) {
        dispatch({
            type: DELETE_BOOK_FAIL,
            payload: error.response.data.message
        })
    }
}
// Update book
export const updateBook = (id, formData, token) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_BOOK_REQUEST })

        const { data } = await axios.patch(`/api/book/${id}/`, formData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })

        dispatch({
            type: UPDATE_BOOK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_BOOK_FAIL,
            payload: error.response.data.message
        })
    }
}