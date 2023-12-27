import React from 'react'
import SideNav from './[cmponents]/SideNav'

const layout = ({ children }) => {
    return (

        <div>
            <SideNav />
            {children}
        </div>
    )
}

export default layout