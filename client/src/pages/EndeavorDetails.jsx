import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GetEndeavor, DeleteComment } from '../services/EndeavorServices'
import FireButton from '../components/FireButton'
import Comment from '../components/Comment'
import CommentRender from '../components/CommentRender'

const EndeavorDetails = ({ user, handleEndeavors, endeavors, comment }) => {
  let { id } = useParams()
  const [endeavor, setEndeavor] = useState([])
  
  let navigate = useNavigate()
  
  useEffect(() => {
    const handleEndeavor = async () => {
      const data = await GetEndeavor(id)
      setEndeavor(data)
    }
    handleEndeavor()
    
  }, [endeavors])

  
  return user ? (
    <div className='detail'>
      <img src={endeavor.image} alt='endeavorImage' className="endeavorImage" />
      <h4 className="headerText">{!!endeavor.name && endeavor.name}</h4>
      <Link to={`/edit/${endeavor._id}`}><button className="editButton">edit</button></Link>
      <Link to={`/delete/${endeavor._id}`}>
        <button className="delButton">delete</button>
      </Link>
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
        <FireButton endeavor={endeavor} endeavorId={endeavor._id} user={user} handleEndeavors={handleEndeavors} />
      </div>
      <br />
      <div className="commentCard">
        <div className="tH">date</div>
        <div className="tH">user</div>
        <div className="tH">comment</div>
        {!!endeavor.comments && endeavor.comments.map((comment) => (
          <div key={comment._id}>
            <CommentRender user={user} comment={comment} commentId={comment.id} DeleteComment={DeleteComment} handleEndeavors={handleEndeavors} />
          </div>
        ))}
        <Comment user={user} endeavor={endeavor} comment={comment} endeavorId={endeavor._id} handleEndeavors={handleEndeavors} />
      </div>
      <br />
      <br />

      <br />
      <Link to={`${"/endeavors/"}`}><button className="bailButton">back</button></Link>
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

export default EndeavorDetails
