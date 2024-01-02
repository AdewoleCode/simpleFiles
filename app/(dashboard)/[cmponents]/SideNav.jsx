"use client"
import React, { useState } from 'react'
import styles from "../../../styles/sideNav.module.css"
import { IoCloudUploadSharp } from "react-icons/io5";
import { PiFilesFill } from "react-icons/pi";
import { GiUpgrade } from "react-icons/gi";
import { BiSolidMessageDetail } from "react-icons/bi";
import Link from 'next/link';



const SideNav = ({ showSidebarMobile }) => {

  const menuList = [
    {
      id: 1,
      name: 'Files',
      icon: PiFilesFill,
      path: '/files'
    },
    {
      id: 2,
      name: 'Upload',
      icon: IoCloudUploadSharp,
      path: "/upload"
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: GiUpgrade,
      path: '/upgrade'
    },
    {
      id: 4,
      name: 'Newsletter',
      icon: BiSolidMessageDetail,
      path: '/news'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <div className={showSidebarMobile ? styles.sideBarContainer : styles.sideBarContainerShow}>
      <h1 className={styles.title}>SIMPLESHARE</h1>
      {
        menuList.map((item, index) => (
          <Link href={`${item.path}`}>

            <button
              className={activeIndex === index ? styles.menuListBtnActive : styles.menuListBtn}
              key={item.id}
              onClick={() => setActiveIndex(index)}
            >
              <item.icon className={styles.menuListIcon} />
              <p>{item.name}</p>

            </button>
          </Link>

        ))
      }
    </div>
  )
}

export default SideNav