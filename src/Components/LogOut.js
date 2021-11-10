import React from 'react'
import {useHistory, Route} from 'react-router-dom'



const LogOut = () => {

    const history = useHistory()

    localStorage.clear()
    history.push('/')

    return (
        <div>
            <h2>Logging Out...</h2>

        </div>
    )
}

export default LogOut
