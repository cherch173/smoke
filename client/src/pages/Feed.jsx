import React from 'react'
import { useEffect, useState } from 'react'
import { GetEndeavors } from '../services/EndeavorServices'
import { useNavigate } from 'react-router-dom'
import FireButton from '../components/FireButton'
import Comment from '../components/Comment'
import { Link } from 'react-router-dom'

const Feed = ({ user }) => {
    let navigate = useNavigate()
    const [endeavors, setEndeavors] = useState([])

    useEffect(() => {
        handleEndeavors()
    }, [])

    const handleEndeavors = async () => {
        const data = await GetEndeavors()
        setEndeavors(data)
    }

    return user ? (

        <div>
            <h4 className='fireText'>SMOKE</h4>
            <h6 className="subHeaderText">
                <i>
                    a home for creatives
                </i>
            </h6>
            <div className="grid col=4">
                {endeavors.map((endeavor, idx) => (
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
                        <div className="socialCard">
                        <FireButton endeavor={endeavor} endeavorId={endeavor._id} user={user} handleEndeavors={handleEndeavors} />
                        <br />
                        <Comment endeavor={endeavor} endeavorId={endeavor._id} user={user} handleEndeavors={handleEndeavors} />
                        </div>
                    </div>
                ))}
            </div>
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
            <button className="button" onClick={() => navigate('/signin')}>Sign In</button>
        </div>
    )
}



export default Feed
