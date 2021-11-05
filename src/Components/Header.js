import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/register'>Register</Link>
        </div>
    )
}

export default Header
