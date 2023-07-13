import { useState } from "react";
import Client from "../services/api";
import { Link } from "react-router-dom";

const Comment = () => {
    const initialState = {
        newComment: 'add a comment here'
    }
    const [commnentState, setCommentState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('/comments', commnentState)
        setCommentState(initialState)
    }

    const handleChange = (e) => {
        setCommentState({ ...commnentState, [e.target.id]: e.target.value })
    }

    return (
        <div>
            {/* <wrapper> */}
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
            <br />
            <form onSubmit={handleSubmit}>
                <textarea
                    className="newComment"
                    name="newComment"
                    id="newComment"
                    cols="25"
                    rows="5"
                    onChange={handleChange}
                    value={commnentState.newComment}
                >
                </textarea>
                <br />
                <br />
                <button className="button" type="submit">add comment</button>
            </form>
            {/* </wrapper> */}
        </div>
    )
}

export default Comment