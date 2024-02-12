import React from 'react'
import "./storageInfo.css"

const StorageInfo = ({totalSIzeUsed}) => {
    return (
        <div className='storageInfo'>
            <div className='top'>
                <h1>{totalSIzeUsed}5.74</h1>
                <p>used of</p>
                <h1>50mb</h1>
            </div>
            <div className="bar">
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
            </div>
        </div>
    )
}

export default StorageInfo