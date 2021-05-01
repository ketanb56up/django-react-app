import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { authorAllBooks, deleteBook } from '../../Redux/Action/bookAction'


const UserDashboard = () => {
    const { user } = useSelector((state) => state.users);

    const token = user?.access
    const dispatch = useDispatch()

    useEffect(() => {

        if (error) {
            return alert.error(error)
        }

        dispatch(authorAllBooks(token));

    }, [dispatch, error])

    const deletebook = (id) => {
        dispatch(deleteBook(token, id))
    }


    const { authorallbooks, error } = useSelector(state => state.authorAllBook)


    return (
        <Fragment>
            <h1>Hello </h1>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        {authorallbooks.map((item, index) => {
                            return (
                                <div key={index} className="col-md-4" >
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={item.poster_image} />
                                        <div className="card-body">
                                            <h5>{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <Link to={`/user/edit/${item.id}`} type="button" className="btn btn-sm btn-outline-secondary"
                                                    >Edit</Link>
                                                    <button onClick={() => deletebook(item.id)} type="button" className="btn btn-sm btn-outline-secondary"
                                                    >Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </Fragment >
    )
}


export default UserDashboard
