import React from 'react'
import Client from '../services/api'

const CommentRender = ({ comment, handleEndeavors }) => {

    const getDate = () => {
        const formattedDate = new Date(comment.createdAt).toDateString()
        return formattedDate
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.delete(`/comments/${comment._id}`)
        handleEndeavors()
    }

    return (
        <div>
            <table className="comment">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tR">
                        <td className="tD">{getDate()}</td>
                        <td className="tD">{!!comment.userName && comment.userName}</td>
                        <td className="tD">{!!comment.comment && comment.comment}</td>
                        <td>
                            <form onSubmit={handleSubmit}>
                                <button className="delButton" type="submit" onClick={handleEndeavors}>X</button>
                            </form>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default CommentRender
