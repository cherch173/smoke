import { useState, useEffect } from "react";
import Client from "../services/api";
import { GetComments } from "../services/EndeavorServices";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Comment = ({ handleEndeavors, endeavorId, endeavor, user, comment }) => {
    const initialState = {
        comment: ''
    }
    const [commentState, setCommentState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let updatedState = {
            ...commentState,
            user: user.id,
            // comment: endeavor.comment
        }
        await Client.post(`/comments/${endeavorId}`, updatedState)
        setCommentState(initialState)
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
                <button className="button" type="submit">add comment</button>
            </form>
        </div >
        // </div>
    )
}

export default Comment