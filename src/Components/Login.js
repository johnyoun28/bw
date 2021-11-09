import axios from 'axios'
import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const initialFormValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const history = useHistory()

    const changeHandler = (evt) => {
        const { name, value } = evt.target
        setFormValues({...formValues, [name]: value})
    } 

    const submitHandler = (evt) => {
        evt.preventDefault()
        axiosWithAuth()
        .post('/api/auth/login', formValues)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            history.push('/dashboard')
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <input 
                name='username'
                type='text'
                style={{ width: '350px' }}
                value={formValues.username}
                onChange={changeHandler}
                placeholder='username'>
                </input>
                <br/>

                <input 
                name='password'
                type='text'
                style={{ width: '350px' }}
                value={formValues.password}
                onChange={changeHandler}
                placeholder='password'>
                </input>
                
                <br/>

                <button>Login</button>
            </form>

            
        </div>
    )
}

export default Login
