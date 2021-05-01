import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../../Redux/Action/bookAction';
import { UPDATE_BOOK_RESET } from '../../Redux/Constant/bookConstants'

const EditBook = ({ history, match }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [poster_image, setposter_image] = useState('')
    const [author, setAuthor] = useState('')

    const { user } = useSelector((state) => state.users);
    const { authorallbooks } = useSelector(state => state.authorAllBook)

    const token = user?.access

    var id = match.params.id
    const getBookData = () => {
        console.log(id)
        var singleBook = authorallbooks.find(function (item) {
            if (item.id == id)
                return true;
        });

        if (singleBook) {
            setTitle(singleBook.title)
            setDescription(singleBook.description)
            setAuthor(singleBook.author)
            setposter_image(singleBook.poster_image)
        }
    }

    const { isUpdated, error, loading } = useSelector(state => state.updateBook)

    const dispatch = useDispatch();
    useEffect(() => {

        getBookData()

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {

            history.push('/user/dashboard')
            dispatch({
                type: UPDATE_BOOK_RESET
            })

        }

    }, [dispatch, alert, error, history, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        formData.append('title', title);
        formData.append('description', description);
        formData.append('poster_image', poster_image);
        formData.append('author', author);
        dispatch(updateBook(id, formData, token))
    };

    const onChangeImage = e => {
        if (e.target.name === 'poster_image') {
            setposter_image(e.target.files[0])
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
                        onChange={(e) => setTitle(e.target.value)}
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
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Book description"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Bimage" className="form-label">
                        Image
                    </label>

                    <input type="file" name="poster_image" onChange={onChangeImage} id="Bimage" />
                </div>


                <button type="submit" className="btn btn-primary" disabled={loading ? true : false} >
                    Edit Book
                </button>
            </form>
        </Fragment>
    )
}

export default EditBook
