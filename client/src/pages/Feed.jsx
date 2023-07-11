import React from 'react'
import { useEffect, useState } from 'react'
import { GetEndeavors } from '../services/EndeavorServices'
import { useNavigate } from 'react-router-dom'
import FireButton from '../components/FireButton'
import { Link } from 'react-router-dom'

const Feed = () => {
    let navigate = useNavigate()
    const [endeavors, setEndeavors] = useState([])

    useEffect(() => {
        const handleEndeavors = async () => {
            const data = await GetEndeavors()
            setEndeavors(data)
        }
        handleEndeavors()
    }, [])

    return (
        <div className="grid col=4">
            <h4 className='fireText'>SMOKE</h4>
            {endeavors.map((endeavor, idx) => (
                <div className="card" key={idx}>
                    <Link to={`${endeavor._id}`}>
                        <h4>{endeavor.name}</h4>
                    </Link>
                    <img src={endeavor.image} alt="endeavorImg" className="endeavorImage" />
                    <p>
                        <span className='fireText'>description: </span>
                        {endeavor.description}
                    </p>
                    <p>
                        <span className='fireText'>website: </span>
                        <a className="endeavorLink" href={endeavor.website}>{endeavor.website}</a>
                    </p>
                    <p>
                        <span className='fireText'>genre: </span>
                        {!!endeavor.genres && endeavor.genres.genre}
                    </p>
                    <FireButton />
                    <p>
                        <span className='fireText'>comments: </span>
                        {!!endeavor.comments && endeavor.comments.comment}
                    </p>
                </div>
            ))}

        </div>
    )
}



export default Feed
