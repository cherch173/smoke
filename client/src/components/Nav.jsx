import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <div className="nav">
            <ul className="navLine">
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

    )
}

export default Nav
