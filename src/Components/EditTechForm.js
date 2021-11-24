import React, { useState } from 'react'

const initialFormValues = {
    name: ''
}

const EditTechForm = (props) => {

    const [formValues, setFormValues] = useState(initialFormValues)

    return (
        <div>
            <h2>Edit Tech</h2>
            <form>
                <input
                name='name'
                value={formValues.name}
                type='text'
                placeholder='name'
                >
                </input>
                <br/>
                <button>Edit</button>
            </form>
            
        </div>
    )
}

export default EditTechForm
