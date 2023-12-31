import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ user, handleLogOut }) => {
    let userOptions
    if (user) {
        userOptions = (
            <nav>
                <h6>
                    <span className='fireText'>
                    {user.name}
                    </span> is currently
                        logged in.
                    <span className="fireText">
                    </span>
                </h6>
                <Link to='/'>HOME</Link>
                <Link to="/endeavors">MAIN FEED</Link>
                <Link to="/new">ADD NEW</Link>
                <Link to="/about">ABOUT</Link>
                <Link onClick={handleLogOut} to="/">LOG OUT</Link>
            </nav>
        )
    }

    const publicOptions = (
        <nav className="navLine">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/signin">LOG IN</Link>
        </nav>
    )
    return (

        <header>
            {user ? userOptions : publicOptions}
        </header>

    )
}

export default Nav
