import React from 'react'
import Client from '../services/api'
import { GetEndeavor } from '../services/EndeavorServices'
import { Link } from 'react-router-dom'

const DeleteEndeavor = ({user}) => {
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
            <button className="delButton">DELETE</button>
            <Link to={`/endeavors`}>
                <button className="button">BAIL</button>
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
