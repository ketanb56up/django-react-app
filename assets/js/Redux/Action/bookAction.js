import { ADD_USER_BOOK_FAIL, ADD_USER_BOOK_REQUEST, ADD_USER_BOOK_SUCCESS } from "../Constant/bookConstants";

export const addBook = (bookdata) => async (dispatch) => {
    console.log("Books Datacomin from Form", bookdata)
    try {

        dispatch({ type: ADD_USER_BOOK_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Basic ${token}`
            }
        }
        const { data } = await axios.post("http://localhost:8000/api/book/", bookdata, config);

        console.log("Books Daa in action")
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