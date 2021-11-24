import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchTechs } from '../actions'
import DashboardCard from './DashboardCard'
import {useHistory} from 'react-router-dom'

const Dashboard = (props) => {

    const history = useHistory()

    useEffect(() => {
        props.fetchTechs()
    },[props.fetchTechs])

    return (
        <div>
            {
                props.techs.map(tech => (
                    <DashboardCard tech={tech} key={tech.id}/>
                ))
            }
            <br/>
            <button onClick={() => history.push('/add-tech')}>Add Tech</button>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        techs: state.techs
    }
}

export default connect(mapStateToProps, {fetchTechs}) (Dashboard)
