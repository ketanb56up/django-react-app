import React, { Fragment } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../Redux/Action/userAction'

const Header = () => {
    const alert = useAlert()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }
    const { loading, user } = useSelector(state => state.users)
    return (

        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {user.access ? (
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
                                !loading && <Link className="nav-link btn btn-danger text-white" to="/login">Login<span className="sr-only">(current)</span></Link>
                            )
                        }

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
