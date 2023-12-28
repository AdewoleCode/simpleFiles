"use client"
import React from 'react'
import SideNav from './[cmponents]/SideNav'
import TopNav from './[cmponents]/TopNav'
import { useState } from 'react'
import styles from "../../styles/dashboardChildren.module.css"

const layout = ({ children }) => {

    const [showSidebarMobile, setShowSidebarMobile] = useState(false)

    return (
        <div>
            <div>
                <SideNav
                    showSidebarMobile={showSidebarMobile}
                />
            </div>
            <div className={styles.childrenContainer}>
                <TopNav
                    setShowSidebarMobile={setShowSidebarMobile}
                    showSidebarMobile={showSidebarMobile}
                />
                {children}
            </div>
        </div>
    )
}

export default layout