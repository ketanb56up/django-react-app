import React, { Fragment, useState } from 'react'
import { addBook } from '../../Redux/Action/bookAction'

const AddBooks = () => {
    const [authorID, setAuthorId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [bookImage, setBookImage] = useState('')

    const bookDeatils = {
        'author': authorID, 'title': title, 'description': description, 'poster_image': bookImage
    };

    const submitHandler = (e) => {
        // e.preventDefault();
        // dispatch(addBook(bookDeatils))
    };

    return (
        <form onSubmit={submitHandler}>

            <div className="mb-3">
                <label htmlFor="FirstName" className="form-label">
                    Author Id
            </label>
                <input
                    type="text"
                    className="form-control"
                    id="FirstName"
                    value={authorID}
                    onChange={(e) => setAuthorId(e.target.value)}
                    placeholder="Author Name"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Book Title
             </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Book description"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="Bimage" className="form-label">
                    Image
            </label>
                <input
                    type='file'
                    value={bookImage}
                    className='custom-file-input'
                    onChange={(e) => setBookImage(e.target.files[0])}
                    id='Bimage'
                    accept="iamges/*"
                />
            </div>


            <button type="submit" className="btn btn-primary" >
                Add Book
        </button>
        </form>
    )
}

export default AddBooks
