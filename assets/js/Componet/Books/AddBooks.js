import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../../Redux/Action/bookAction'


const AddBooks = ({ history }) => {
    const { loaduser, error } = useSelector(state => state.loaduser)
    const { success, loading } = useSelector(state => state.bookRe)
    const { user } = useSelector((state) => state.users);

    const token = user?.access

    const [book, setBook] = useState({
        title: '',
        description: '',
        author: loaduser.id,
    })

    const { title, description, author } = book;


    const [poster_image, setposter_image] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {

        if (success) {
            history.push("/user/dashboard")
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, error, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        formData.append('title', title);

        formData.append('description', description);

        formData.append('author', author);


        formData.append('poster_image', poster_image,);

        debugger

        dispatch(addBook(formData, token))
    };

    const onChange = e => {
        if (e.target.name === 'poster_image') {

            setposter_image(e.target.files[0])
            console.log("poster_image", poster_image)

        } else {
            setBook({ ...book, [e.target.name]: e.target.value })
        }
    }

    return (
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
                {/* <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={onchange}
                    name="poster_image"
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                /> */}
                <input type="file" name="poster_image" onChange={onChange} id="Bimage" />
            </div>


            <button type="submit" className="btn btn-primary" disabled={loading ? true : false} >
                Add Book
        </button>
        </form>
    )
}

export default AddBooks
