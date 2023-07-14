import React from 'react'


const CommentRender = ({ comment }) => {
    return (
        <div>
            <div className="commentTable">
                <div className="tR">
                    <div className="tH">date</div>
                    <div className="tH">user</div>
                    <div className="tH">comment</div>
                </div>
                <br />
                <br />
                <div className="tR">
                    <div className="tD">2023-07-13</div>
                    <div className="tD">{comment.name}</div>
                    <div className="tD">{!!comment.comment && comment.comment}</div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default CommentRender
