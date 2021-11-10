import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { useParams } from 'react-router'
import { fetchTechDetails } from '../actions/index'

const TechDetails = (props) => {

    const { id } = useParams()

    useEffect(() => {
        props.fetchTechDetails(id)
    },[])

    return (
        <div>
            <h3>Name: {props.techs.item}</h3>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

    const mapStateToProps = state => {
        return {
            techs: state.techs
        }
    }

export default connect(mapStateToProps,{fetchTechDetails}) (TechDetails)
