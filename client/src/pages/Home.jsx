import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = ({ user }) => {
  let navigate = useNavigate()
  return user ? (
    <div>
      <h4>Welcome to <span className="fireText">SMOKE</span></h4>
      <p><i>...where there's smoke, there's <span className="fireText">fire</span>.</i></p>
      <br />
      <Link to={'/endeavors'}>
        <button className="button">ENTER</button>
      </Link>
    </div>
  ) : (
    <div className="protected">
      <h4>Welcome to <span className="fireText">SMOKE</span></h4>
      <p><i>...where there's smoke, there's <span className="fireText">fire</span>.</i></p>
      <br />
      <section className="welcome-signin">
        <button className="button" onClick={() => navigate('/signin')}>
          log in
        </button>
      </section>
      <br />
      <section className="welcome-register">
        <button className="button" onClick={() => navigate('/register')}>
          register
        </button>
      </section>
    </div>
  )
}

export default Home
