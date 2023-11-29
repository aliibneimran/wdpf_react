import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            {/* ======= Header ======= */}
            <Header></Header>
            {/* End Header */}
            {/* ======= Sidebar ======= */}
            <Sidebar></Sidebar>
            {/* End Sidebar*/}
            <Outlet></Outlet>
            {/* End #main */}
            {/* ======= Footer ======= */}
            <Footer></Footer>
            {/* End Footer */}
        </div>

    )
}
