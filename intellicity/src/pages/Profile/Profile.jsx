import React from 'react'
import {getAuthUser} from "../../Helper/Storage"
import SideMenu from './components/SideMenu'
import "./style/profile.css"
import { Outlet } from 'react-router-dom'
function Profile() {
  const user = getAuthUser()
  return (
    <>
    <section className='main-profile-body'>
    <SideMenu/>
    <Outlet/>
    </section>
    </>
  )
}

export default Profile