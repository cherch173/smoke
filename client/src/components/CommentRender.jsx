import React from 'react'


const CommentRender = ({ comment }) => {
    return (
        <div>
            <div className="comment">
                <br />
                <div className="tD">2023-07-13</div>
                <div className="tD">{comment.user}</div>
                <div className="tD">{!!comment.comment && comment.comment}</div>
                <br />
            </div>
        </div>
    )
}

export default CommentRender
