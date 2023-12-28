import React from 'react'
import styles from "../../../styles/topNav.module.css"
import { FaBars } from "react-icons/fa"
import { UserButton } from '@clerk/nextjs'


const TopNav = ({ setShowSidebarMobile, showSidebarMobile }) => {

    return (
        <div className={styles.topNavContainer}>
            <div className={styles.menuIcon}>
                <FaBars onClick={() => setShowSidebarMobile(!showSidebarMobile)} />
            </div>
            <div>
                <h1 className={styles.title}>SIMPLESHARE</h1>
            </div>
            <div>
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    )
}

export default TopNav