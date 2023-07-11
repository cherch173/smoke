import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GetEndeavor } from '../services/EndeavorServices'

const EndeavorDetails = () => {
    let { id } = useParams()
    // const [endeavorId, setEndeavorId] = useState('')
    const [endeavor, setEndeavor] = useState({})
  

    useEffect(() => {
      const handleEndeavor = async () => {
        const data = await GetEndeavor(id)
        setEndeavor(data)
    }
    handleEndeavor()

    })

  return (
    <div className='detail'>
        <div className='detail-header'>
          <img src="" alt="" />
            <h4>{!!endeavor.name && endeavor.name}</h4>
            <p>{!!endeavor.genres && endeavor.genres}</p>
            <p>{!!endeavor.description && endeavor.description}</p>
            <p>{!!endeavor.website && endeavor.website}</p>
            <p>{!!endeavor.comments && endeavor.comments}</p>



        </div>
      
    </div>
  )
}

export default EndeavorDetails
