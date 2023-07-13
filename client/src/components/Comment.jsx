import { useState } from "react";
import Client from "../services/api";
import { Link } from "react-router-dom";

const Comment = () => {
    const inisitalState = {
        comment: 'add a comment here'
    }
    const [commnentState, setCommentState] = useState(inisitalState)



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
                <form onSubmit="">
                    {/* <label htmlFor="addComment" className="fireText">add comment: </label> */}
                    <textarea 
                        name="addComment"
                        id="addComment" 
                        cols="20" 
                        rows="6"
                        onChange=""
                        value=""
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