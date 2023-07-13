import { useState } from "react";
import Client from "../services/api";

const Comment = ({ handleEndeavors, endeavor, user }) => {
    const initialState = {
        comment: 'add a comment here'
    }
    const [commentState, setCommentState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let updatedState = {
            ...commentState,
            user: user.id
        }
        await Client.post('/comments', updatedState)
        setCommentState(initialState)
        handleEndeavors()

    }

    const handleChange = (e) => {
        setCommentState({ ...commentState, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <wrapper>
                <table className="commentTable">
                    <thead className="commentHeader">
                        <tr>
                            <th>DATE</th>
                            <th>USER</th>
                            <th>COMMENT</th>
                        </tr>
                    </thead>

                    <tbody className="commentBody">
                        <tr>
                            <td>{endeavor.comments && endeavor.comments.date}</td>
                            <td>{endeavor.comments && endeavor.comments.user}</td>
                            <td>{endeavor.comments && endeavor.comments.comment}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="newComment"
                        name="comment"
                        id="comment"
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
            </wrapper>
        </div>
    )
}

export default Comment