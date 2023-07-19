import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { DeleteComment, GetEndeavors, GetComments } from '../services/EndeavorServices'
import { useNavigate } from 'react-router-dom'
import FireButton from '../components/FireButton'
import Comment from '../components/Comment'
import CommentRender from '../components/CommentRender'
import { Link } from 'react-router-dom'

const Feed = ({ user, endeavors, handleEndeavors }) => {
    let navigate = useNavigate()

    const scrollDownRef = useRef()
    const scrollUpRef = useRef()

    useEffect(() => {
        handleEndeavors()
        GetComments
    }, [])

    const scrollUp = () => {
        scrollDownRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollDown = () => {
        scrollUpRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return user ? (

        <div className="scrollDiv">
            <h4 ref={scrollDownRef} className='fireText'>SMOKE</h4>
            <h6 className="subHeaderText">
                <i>
                    a home for creatives
                </i>
            </h6>
            <section>
                <button className="bailButton" onClick={scrollDown}>
                    scroll to end
                </button>
            </section>
            {!!endeavors &&
                endeavors.map((endeavor, idx) => (
                    <div className="card" key={idx}>
                        <Link to={`${endeavor._id}`}>
                            <h4 className="headerText">{endeavor.name}</h4>
                            <img src={endeavor.image} alt="endeavorImg" className="endeavorImage" />
                        </Link>
                        <p>
                            <span className='fireText'>description: </span>
                            {endeavor.description}
                        </p>
                        <p>
                            <span className='fireText'>website: </span>
                            <a target="_blank" className="endeavorLink" href={endeavor.website}>{endeavor.website}</a>
                        </p>
                        <p>
                            <span className='fireText'>genre: </span>
                            {!!endeavor.genres && endeavor.genres}
                        </p>
                        <FireButton endeavor={endeavor} endeavorId={endeavor._id} user={user} handleEndeavors={handleEndeavors} />
                        <br />
                        <div className="commentCard">
                            <label className="commentTh">comments</label>
                            <br />
                            <br />
                            {endeavor.comments.map((comment) => (
                                <div key={comment._id}>
                                    <CommentRender commentId={comment._id} comment={comment} DeleteComment={DeleteComment} handleEndeavors={handleEndeavors} />
                                </div>
                            ))}
                            <Comment endeavor={endeavor} endeavorId={endeavor._id} user={user} handleEndeavors={handleEndeavors} />
                        </div>
                    </div>
                ))}
            <section>
                <button ref={scrollUpRef} className="bailButton" onClick={scrollUp}>
                    scroll to top
                </button>
            </section>
        </div>
    ) : (
        <div className="protected">
            <h6>
                <span className="fireText">
                    Sorry...
                </span>
                in order to view this page you must be
                <span className="fireText">
                    signed in
                </span>
                .</h6>
            <button className="button" onClick={() => navigate('/signin')}>log in</button>
        </div>
    )
}



export default Feed
