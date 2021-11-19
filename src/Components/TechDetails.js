import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { fetchTechDetails, deleteTech } from '../actions/index'

const TechDetails = (props) => {

    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        props.fetchTechDetails(id)
    },[props.fetchTechDetails, id])

    const removeTech = () => {
        props.deleteTech(id)
        history.push('/dashboard')
    }


    return (
        <div>
            <h3>Name: {props.techs.item}</h3>
            <button>Edit</button>
            <button onClick={removeTech}>Delete</button>
        </div>
    )
}

    const mapStateToProps = state => {
        return {
            techs: state.techs
        }
    }

export default connect(mapStateToProps,{fetchTechDetails, deleteTech, }) (TechDetails)
