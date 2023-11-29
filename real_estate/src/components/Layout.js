import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
        <div class="body-wrapper">
            <Header></Header>
            <div class="ltn__utilize-overlay"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    </>
  )
}
