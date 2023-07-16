import { get } from 'mongoose'
import React from 'react'


const CommentRender = ({ comment }) => {
    
    const getDate = () => {
        const formattedDate = new Date(comment.createdAt).toDateString()
        return formattedDate
      }

    return (
        <div>
            <div className="comment">
                <br />
                <div className="tD">{getDate()}</div>
                <div className="tD">{comment.userName}</div>
                <div className="tD">{!!comment.comment && comment.comment}</div>
                <br />
            </div>
        </div>
    )
}

export default CommentRender
