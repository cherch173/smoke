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
    // console.log(endeavor)
    // let navigate = useNavigate()

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
        // navigate('/endeavors')
    }

    const handleChange = (e) => {
        setCommentState({ ...commentState, [e.target.id]: e.target.value })
    }

    return (
        <div className="grid col=3">
            <div className="commentTable">
                    <div className="tR">
                        <div className="tH">date</div>
                        <div className="tH">user</div>
                        <div className="tH">comment</div>
                </div>
                <br />
                <br />
                    <div className="tR">
                        <div className="tD">2023-07-13</div>
                        <div className="tD">{!!user.name && user.name}</div>
                        <div className="tD">{!!comment.comment && comment.comment}</div>
                </div>
            </div>
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