import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GetEndeavor } from '../services/EndeavorServices'
import FireButton from '../components/FireButton'
import Comment from '../components/Comment'

const EndeavorDetails = ({ user }) => {
  let { id } = useParams()
  const [endeavor, setEndeavor] = useState({})


  useEffect(() => {
    const handleEndeavor = async () => {
      const data = await GetEndeavor(id)
      setEndeavor(data)
    }
    handleEndeavor()

  }, [])

  return user ? (
    <div className='detail'>
      <img src={endeavor.image} alt='endeavorImage' className="endeavorImage" />
      <h4 className="headerText">{!!endeavor.name && endeavor.name}</h4>
      <div className='card'>
        <p>
          <span className='fireText'>
            description:
          </span>
          {!!endeavor.description && endeavor.description}
        </p>
        <p>
          <span className='fireText'>
            website:
          </span>
          <a target="_blank" href={endeavor.website}>{endeavor.website}</a>
        </p>
        <p>
          <span className='fireText'>
            genre:
          </span>
          {!!endeavor.genres && endeavor.genres}
        </p>
        <FireButton endeavor={endeavor} user={user} />
        <br />
        <Comment />
        <br />
        <br />
      </div>
      <Link to={`${"/endeavors"}`}><button className="button">back</button></Link>

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

export default EndeavorDetails
