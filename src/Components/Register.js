import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const initialFormValues = {
    username: '',
    password: ''
}

const Register = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const history = useHistory()

    const changeHandler = (evt) => {
        const {name, value} = evt.target
        setFormValues({...formValues, [name]: value})
    }

    const submitHandler = evt => {
        evt.preventDefault()
        axiosWithAuth()
        .post('/api/auth/register', formValues)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            history.push('/')
        })
        .catch(err => {
            console.log(err)
        })

        .finally(setFormValues(initialFormValues))

    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <input 
                name='username'
                type='text'
                onChange={changeHandler}
                style={{ width: '350px' }}
                value={formValues.username}
                placeholder='username'>
                </input>
                <br/>

                <input 
                name='password'
                type='password'
                onChange={changeHandler}
                style={{ width: '350px' }}
                value={formValues.password}
                placeholder='password'>
                </input>
                <br/>

                <button>Register</button>
            </form>

            
        </div>
    )
}

export default Register
