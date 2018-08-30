import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>
                <Link to='/about'> Go to About Page</Link>
            </p>
        </div>
    )
}

export default Home;