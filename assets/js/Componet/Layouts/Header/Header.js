import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../Redux/Action/userAction'

const Header = ({ history }) => {

    const dispatch = useDispatch()
    const { loading, user, isSuccess } = useSelector(state => state.users)
    const token = user?.access
    const refresh_token = user?.refresh

    const logoutHandler = () => {
        dispatch(logout(refresh_token, token));

    }
    useEffect(() => {
        if (user === null && isSuccess) {
            history.push('/')
        }
    }, [isSuccess, user])
    return (

        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {token ? (
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item active mr-2">
                                    <Link className="nav-link" to="/user/dashboard">DashBoard<span className="sr-only"></span></Link>
                                </li>

                                <li className="nav-item active mr-2">
                                    <Link className="nav-link" to="/user/add-book">Add Books<span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item active mr-2">
                                    <Link className="nav-link" to="/" onClick={logoutHandler}>
                                        Logout
                                </Link>
                                </li>
                            </ul>
                        ) :
                            (
                                !loading && <Link className="nav-link btn btn-danger text-white" to="/login">Login</Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
