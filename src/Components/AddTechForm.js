import React, {useState} from 'react'
import {connect} from 'react-redux'
import { addTech } from '../actions'
import { useHistory } from 'react-router'

const initialFormValue = {
    item: ''
}

const AddTechForm = (props) => {
    
    const history = useHistory()

    const [formValues, setFormValues] = useState(initialFormValue)

    const changeHandler = evt => {
        const {name,value} = evt.target
        setFormValues({...formValues, [name]:value})
    }
    
    const submitHandler = evt => {
        evt.preventDefault()

        const newTech = {
            item: formValues.item,
            user_id: 1
        }

        props.addTech(newTech)
        history.push('/dashboard')
    }


    return (
        <div>
            <h2> Add Your Tech </h2>
            <form onSubmit={submitHandler}>
                <input
                name='item'
                type='text'
                value={formValues.item}
                onChange={changeHandler}
                placeholder='enter tech name'
                ></input>
            
                <br/>
                <button>Add Tech</button>
            </form>
            
        </div>
    )
}



export default connect(null, {addTech}) (AddTechForm)
