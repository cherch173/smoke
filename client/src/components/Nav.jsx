import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <header>
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
        </div>
      </header>

)}

export default Nav
