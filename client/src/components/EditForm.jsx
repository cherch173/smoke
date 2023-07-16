import React from 'react'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetEndeavor } from '../services/EndeavorServices'

const EditForm = ({ user, handleEndeavors, endeavors, endeavor }) => {
    let { id } = useParams()
    let navigate = useNavigate

    const [formState, setFormState] = useState({})

    useEffect(() => {
        const handleEndeavor = async () => {
            const data = await GetEndeavor(id)
            setFormState(data)
        }
        handleEndeavor
    }, [])



    return user ? (
        <div>
            lol
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


export default EditForm
