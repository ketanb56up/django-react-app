import axios from "axios";
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,

} from "../Constant/userConstants";

export const register = (userData) => async (dispatch) => {
    console.log("userData", userData);

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

export const login = (userName, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const { data } = await axios.post(
            "http://localhost:8000/user/login/",
            { userName, password },
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