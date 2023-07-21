import React from 'react'
import { Outlet } from 'react-router';
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "../../Shared/ScrollTop";
import NavBarAdmin from './components/NavBarAdmin';
import Adminfooter from './components/AdminFooter';
import './style/dashBoard.css'

function DashBoard() {
  return (
    <>
    <NavBarAdmin/>
    <Outlet/>
    <Adminfooter/>
    <ScrollToTop smooth className="scroll-btn" color="#fff" />
    <ScrollTop/>
    </>
  )
}

export default DashBoard