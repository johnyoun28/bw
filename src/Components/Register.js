import React, {useState} from 'react'

const initialFormValues = {
    firstname: '',
    lastname: '',
    password: ''
}

const Register = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    return (
        <div>
            <h2>Register</h2>
            <form>
                <input 
                name='firstname'
                type='text'
                style={{ width: '350px' }}
                value={formValues.firstname}
                placeholder='first name'>
                </input>
                <br/>

                <input 
                name='firstname'
                type='text'
                style={{ width: '350px' }}
                value={formValues.lastname}
                placeholder='last name'>
                </input>
                <br/>

                <input 
                name='firstname'
                type='text'
                style={{ width: '350px' }}
                value={formValues.password}
                placeholder='password'>
                </input>
            </form>

            
        </div>
    )
}

export default Register
