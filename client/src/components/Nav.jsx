import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <header>
        <div className="nav">
            <ul>
                <li className="navLink">
                    <Link to="/">HOME</Link>
                </li>
                <li className="navLink">
                    <Link to="/endeavors">FEED</Link>
                </li>
                <li className="navLink">
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
        </div>
      </header>

)}

export default Nav
