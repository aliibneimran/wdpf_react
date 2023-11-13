// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
// import { Outlet } from "react-router-dom"

import Banner from "./components/Banner"
import ReadyProject from "./components/ReadyProject"
import GoingProject from "./components/GoingProject"
import CommingProject from "./components/CommingProject"
import Query from "./components/Query"
import Team from "./components/Team"
import Partner from "./components/Partner"
import Promotion from "./components/Promotion"
import News from "./components/News"

function App() {
  return (
    <>
      <div id="wrap" className="home-1">

      <Header></Header>
      {/* <Outlet></Outlet> */}
      <Banner></Banner>
        {/* <!--======= Ready Flat portion =========--> */}
        <ReadyProject></ReadyProject>
        {/* <!--=======On Going Flat portion=========--> */}
        <GoingProject></GoingProject>
        <CommingProject></CommingProject>
        {/* <!--======= Box of Loan,Query =========--> */}
        <Query></Query>
        {/* <!--======= TEAM =========--> */}
        <Team></Team>      
        {/* <!--======= PARTHNER =========--> */}
        <Partner></Partner>
        {/* <!-- ads portion --> */}
        <Promotion></Promotion>
        {/* <!--======= news/media =========--> */}
        <News></News>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
