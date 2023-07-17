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
            <div className="comment">
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="tD">{getDate()}</div>
                    <div className="tD">{!!comment.userName && comment.userName}</div>
                    <div className="tD">{!!comment.comment && comment.comment}</div>
                    <button className="delButton" type="submit" onClick={handleEndeavors}>X</button>
                </form>
                <br />
            </div>
        </div>
    )
}

export default CommentRender
