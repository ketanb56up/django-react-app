import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { loaduser, loading } = useSelector(state => state.loaduser)
    const { user } = useSelector((state) => state.users);
    const token = user?.access
    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={props => {
                        if (token && loaduser) {
                            { loaduser ? <Redirect to="/user/dashboard" /> : <Redirect to='login' /> }
                        } else {
                            <Redirect to='/' />
                        }
                        return <Component {...props} />

                    }}
                />

            )}
        </Fragment>
    )
}

export default ProtectedRoute