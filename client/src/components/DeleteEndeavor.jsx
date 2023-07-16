import React from 'react'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { GetEndeavor } from '../services/EndeavorServices'
import { Link, useParams, useNavigate } from 'react-router-dom'

const DeleteEndeavor = ({ user, endeavors }) => {
    let { endeavorId } = useParams()
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.delete(`/endeavors/${endeavorId}`)
        navigate('/endeavors')
    }

    return user ? (
        <div>
            <h5 className="fireText">DELETE ENDEAVOR</h5>
            <p>are you sure you want to
                <span className="deleteText">
                    DELETE
                </span>
                this Endeavor?
            </p>
            <br />
            <form onSubmit={handleSubmit}>
                <button className="delButton">delete</button>
            </form>
            <Link to={`/endeavors`}>
                <button className="bailButton">back</button>
            </Link>
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
            <button className="button" onClick={() => navigate('/signin')}>sign in</button>
        </div>
    )
}

export default DeleteEndeavor
