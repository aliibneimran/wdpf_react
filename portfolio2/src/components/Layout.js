import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* Spinner Start */}
      
      <Header></Header>
      <Outlet></Outlet>

      <Footer></Footer>

      {/* Back to Top */}
      <a href="#" class="btn btn-lg btn-secondary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

  )
}
