import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Link } from 'react-router-dom'
import { login, clearErrors, loadUser } from "../../Redux/Action/userAction";
const Login = ({ history }) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const alert = useAlert();

    const { isAuthenticated, loading, error, user } = useSelector(
        (state) => state.users
    );
    const token = user?.access

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/user/dashboard");
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (token) {
            dispatch(loadUser(token))
        }

    });
    const loginDetails = { 'username': userName, password }

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(loginDetails));
    };

    const floatStyle = {
        float: 'right'
    }
    return (
        <Fragment>
            <div className="container mt-5">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="UserName" className="form-label">
                            User Name
                    </label>
                        <input
                            type="text"
                            className="form-control"
                            id="UserName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="User Name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password1" className="form-label">
                            Password
                    </label>
                        <input
                            type="password"
                            className="form-control"
                            id="Password1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading ? true : false}>
                        Login
                </button>

                    <Link to="/register" style={floatStyle} className=" mt-3">
                        New User?
                     </Link>

                </form>
            </div>

        </Fragment>
    )
}

export default Login
