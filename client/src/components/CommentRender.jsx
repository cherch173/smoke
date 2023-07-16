import React from 'react'


const CommentRender = ({ comment }) => {
    return (
        <div>
            <div className="comment">
                <br />
                <div className="tD">{comment.createdAt}</div>
                <div className="tD">{comment.userName}</div>
                <div className="tD">{!!comment.comment && comment.comment}</div>
                <br />
            </div>
        </div>
    )
}

export default CommentRender
