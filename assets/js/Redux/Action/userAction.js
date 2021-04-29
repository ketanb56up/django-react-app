import axios from "axios";
import { useSelector } from "react-redux";
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,

    CLEAR_ERRORS,

} from "../Constant/userConstants";


export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: USER_REGISTER_REQUEST });

        const { data } = await axios.post("http://localhost:8000/api/user/ ", userData);

        console.log("Data in Register..", data)

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

        const { data } = await axios.post(
            "http://localhost:8000/user/login/", loginDetails
        );

        console.log("Data in Login..", data)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data.message,
        });
    }
};


// // Logout user
// export const logout = () => async (dispatch) => {
//     try {

//         await axios.delete("http://localhost:8000/user/logout/");

//         dispatch({
//             type: LOGOUT_SUCCESS,
//         });

//     } catch (error) {
//         dispatch({
//             type: LOGOUT_FAIL,
//             payload: error.response.data.message,
//         });
//     }
// };

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}