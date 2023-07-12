import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GetEndeavor } from '../services/EndeavorServices'
import FireButton from '../components/FireButton'

const EndeavorDetails = ({user}) => {
  let { id } = useParams()
  const [endeavor, setEndeavor] = useState({})


  useEffect(() => {
    const handleEndeavor = async () => {
      const data = await GetEndeavor(id)
      setEndeavor(data)
    }
    handleEndeavor()

  }, [])

  return (
    <div className='detail'>
      <div className='detail-header'>
        <img src={endeavor.image} alt='endeavorImage' className="endeavorImage" />
        <h4 className="headerText">{!!endeavor.name && endeavor.name}</h4>
        <FireButton endeavor={endeavor} user={user}/>
        <p>
          <span className='fireText'>
            genre:
          </span>
          {!!endeavor.genres && endeavor.genres.genre}
        </p>
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
            comments:
          </span>
          {!!endeavor.comments && endeavor.comments.comment}
        </p>
        <br />
        <br />
      </div>
      <Link to={`${"/endeavors"}`}><button className="button">back</button></Link>

    </div>
  )
}

export default EndeavorDetails
