import React from 'react'

const DashboardCard = (props) => {
    return (
        <div>
            {
                <h2>Tech: {props.tech.item}</h2>

            }
            <button>More Details</button>
            
        </div>
    )
}

export default DashboardCard
