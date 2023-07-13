import { useState, useEffect } from "react";
import Client from "../services/api";
import { GetComments } from "../services/EndeavorServices";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Comment = ({ handleEndeavors, endeavors, user }) => {
    const initialState = {
        comment: 'add a comment here'
    }
    const [commentState, setCommentState] = useState(initialState)

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let updatedState = {
            ...commentState,
            user: user.id
        }
        await Client.post('/comments', updatedState)
        setCommentState(initialState)
        GetComments()
        handleEndeavors()
        navigate('/endeavors')
    }

    const handleChange = (e) => {
        setCommentState({ ...commentState, [e.target.id]: e.target.value })
    }

    return (
        <div className="grid col=3">
            {/* {endeavors.map(() => { */}

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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            {/* })} */}
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
        </div>
    )
}

export default Comment