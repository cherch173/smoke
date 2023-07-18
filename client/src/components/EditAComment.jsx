import React, { useState, useEffect } from 'react'
import Client from '../services/api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GetComment } from '../services/EndeavorServices'

const EditComment = ({ user, handleEndeavors, endeavors }) => {
    let { commentId } = useParams()
    let navigate = useNavigate()
    const [comment, setComment] = useState({})
    const [commentState, setCommentState] = useState('')

    useEffect(() => {
        const handleComment = async () => {
            const data = await GetComment(commentId)
            setCommentState(data)
        }
        handleComment()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.put(`/comments/${commentId}`, commentState)
        navigate(`/endeavors`)
    }

    const handleChange = (e) => {
        setCommentState({ ...commentState, [e.target.id]: e.target.value })
    }

    return user ? (
        <div>
            <label htmlFor="">
                <span className="coolText">
                    EDIT
                </span>
                Comment
            </label>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <textarea
                    className="newComment"
                    name="comment"
                    id="comment"
                    placeholder={commentState.comment}
                    cols="25"
                    rows="5"
                    onChange={handleChange}
                    value={commentState.comment}
                >
                </textarea>
                <br />
                <br />
                <button className="editButton" type="submit" onClick={handleEndeavors}>edit comment</button>
            </form>
            <Link to={`${"/endeavors"}`}><button className="button">back</button></Link>

        </div>
    ) : (
        <div className="protected">
            <h6>
                <span className="fireText">
                    Sorry...
                </span>
                in order to view this page you must be
                <span className="fireText">
                    signed in
                </span>
                .</h6>
            <button className="button" onClick={() => navigate('/signin')}>log in</button>
        </div>
    )
}

export default EditComment
