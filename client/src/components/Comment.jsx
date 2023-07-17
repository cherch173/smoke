import { useState, useEffect } from "react";
import Client from "../services/api";
import { GetComments } from "../services/EndeavorServices";
import { Link } from "react-router-dom";

const Comment = ({ handleEndeavors, endeavorId, endeavor, user, comment }) => {
    const initialState = {
        comment: '',
    }
    const [commentState, setCommentState] = useState(initialState)
    // console.log(endeavorId, 'endeavorId')

    useEffect(() => {
    //   GetComments()  
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let updatedState = {
            ...commentState,
            user: user.id,
            userName: user.name,
        }
        await Client.post(`/comments/${endeavorId}`, updatedState)
        setCommentState(initialState)
        // console.log('handleEndeavors')
        GetComments()
        handleEndeavors()
    }

    const handleChange = (e) => {
        setCommentState({ ...commentState, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <textarea
                    className="newComment"
                    name="comment"
                    id="comment"
                    placeholder=" add a new comment here"
                    cols="25"
                    rows="5"
                    onChange={handleChange}
                    value={commentState.comment}
                >
                </textarea>
                <br />
                <br />
                <button className="button" type="submit" onClick={handleEndeavors}>add comment</button>
            </form>
        </div >
    )
}

export default Comment