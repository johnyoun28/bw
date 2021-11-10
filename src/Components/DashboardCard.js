import React from 'react'
import { useHistory} from 'react-router'

const DashboardCard = (props) => {

    const history = useHistory()

    return (
        <div>
            {
                <h2>Tech: {props.tech.item}</h2>
            }
            <button onClick={() => history.push(`/tech/${props.tech.id}`)}>More Details</button>
            
        </div>
    )
}

export default DashboardCard
