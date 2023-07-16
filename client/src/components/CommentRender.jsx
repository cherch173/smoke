import { get } from 'mongoose'
import React from 'react'
import Client from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'


const CommentRender = ({ comment, handleEndeavors }) => {
    let { commentId } = useParams()
    let navigate = useNavigate()

    const getDate = () => {
        const formattedDate = new Date(comment.createdAt).toDateString()
        return formattedDate
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.delete(`/comments/${commentId}`)
        handleEndeavors()
        navigate('/endeavors')
    }

    return (
        <div>
            <div className="comment">
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="tD">{getDate()}</div>
                    <div className="tD">{comment.userName}</div>
                    <div className="tD">{!!comment.comment && comment.comment}</div>
                    <button className="delButton" type="submit">X</button>
                </form>
                <br />
            </div>
        </div>
    )
}

export default CommentRender
