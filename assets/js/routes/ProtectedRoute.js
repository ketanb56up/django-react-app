import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ isUser, component: Component, ...rest }) => {
    const { loaduser, loading } = useSelector(state => state.loaduser)
    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={props => {
                        if (isUser === true) {
                            { loaduser ? <Redirect to="/user/dashboard" /> : <Redirect to='login' /> }
                        }
                        return <Component {...props} />

                    }}
                />

            )}
        </Fragment>
    )
}

export default ProtectedRoute