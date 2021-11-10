import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchTechs } from '../actions'
import DashboardCard from './DashboardCard'

const Dashboard = (props) => {

    useEffect(() => {
        props.fetchTechs()
    })

    return (
        <div>
            {
                props.techs.map(tech => (
                    <DashboardCard tech={tech} key={tech.id}/>
                ))
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        techs: state.techs
    }
}

export default connect(mapStateToProps, {fetchTechs}) (Dashboard)
