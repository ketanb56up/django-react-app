import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const EditBook = ({ history }) => {
    const { user } = useSelector((state) => state.users);
    const { authorallbooks } = useSelector(state => state.authorAllBook)
    const { isUpdated, error, loading } = useSelector(state => state.updateBook)
    const token = user?.access

    const [book, setBook] = useState({
        title: '',
        description: '',
    })

    const { title, description, author } = book;


    const [poster_image, setposter_image] = useState('')

    const dispatch = useDispatch();
    useEffect(() => {

        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors());
        // }

        if (isUpdated) {

            dispatch(loadUser());

            history.push('/user/dashboard')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        formData.append('title', title);

        formData.append('description', description);

        formData.append('author', author);


        formData.append('poster_image', poster_image);



        dispatch(addBook(formData, token))
    };

    const onChange = e => {
        if (e.target.name === 'poster_image') {

            setposter_image(e.target.files[0])

        } else {
            setBook({ ...book, [e.target.name]: e.target.value })
        }
    }
    return (
        <Fragment>
            <form onSubmit={submitHandler}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Book Title
                     </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name='title'
                        value={title}
                        onChange={onChange}
                        placeholder="Book title"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name='description'
                        value={description}
                        onChange={onChange}
                        placeholder="Book description"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Bimage" className="form-label">
                        Image
                    </label>

                    <input type="file" name="poster_image" onChange={onChange} id="Bimage" />
                </div>


                <button type="submit" className="btn btn-primary" disabled={loading ? true : false} >
                    Edit Book
                </button>
            </form>
        </Fragment>
    )
}

export default EditBook
