import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { register, clearErrors } from "../../Redux/Action/userAction";

const Register = ({ history }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnPassword, setcnPassword] = useState("");

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, loading, error, user } = useSelector(state => state.users)



    useEffect(() => {

        if (isAuthenticated) {
            history.push('')
            alert.success("Registration Successful")
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [isAuthenticated, dispatch, alert, error, history])

    const userDeatils = {
        'first_name': firstName, 'last_name': lastName, 'username': userName, 'password2': cnPassword, email, password,
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(userDeatils))
    };

    return (
        <Fragment>
            <form onSubmit={submitHandler}>

                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="FirstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="LastName" className="form-label">
                        Last Name
                     </label>
                    <input
                        type="text"
                        className="form-control"
                        id="LastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                </div>

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
                    <label htmlFor="Email1" className="form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="Email1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                    />

                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
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

                <div className="mb-3">
                    <label htmlFor="Password2" className="form-label">
                        Confirm Password
                   </label>
                    <input
                        type="password"
                        className="form-control"
                        id="Password2"
                        value={cnPassword}
                        onChange={(e) => setcnPassword(e.target.value)}
                        placeholder="Confirm Password"
                    />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading ? true : false}>
                    REGISTER
                </button>
            </form>
        </Fragment>
    );
};

export default Register;
