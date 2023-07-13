import { useState } from "react";
import Client from "../services/api";
import { Link } from "react-router-dom";

const Comment = () => {
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
            {/* </wrapper> */}
        </div>
    )
}

export default Comment