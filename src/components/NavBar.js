import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <span>
                <Link to='/'>Home</Link>
            </span>
            <span>
                <Link to='/about'>About</Link>
            </span>
        </div>
    )
}

export default NavBar;
