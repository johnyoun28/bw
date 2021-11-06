import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const initialFormValues = {
    firstname: '',
    lastname: '',
    password: ''
}

const Register = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const changeHandler = (evt) => {
        const {name, value} = evt.target
        setFormValues({...formValues, [name]: value})
    }

    const submitHandler = evt => {
        evt.preventDefault()
        axiosWithAuth()
        .post('/api/auth/register', formValues)
        .then(res => {
            console.log(res)

        })

    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <input 
                name='firstname'
                type='text'
                onChange={changeHandler}
                style={{ width: '350px' }}
                value={formValues.firstname}
                placeholder='first name'>
                </input>
                <br/>

                <input 
                name='lastname'
                type='text'
                onChange={changeHandler}
                style={{ width: '350px' }}
                value={formValues.lastname}
                placeholder='last name'>
                </input>
                <br/>

                <input 
                name='password'
                type='text'
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
