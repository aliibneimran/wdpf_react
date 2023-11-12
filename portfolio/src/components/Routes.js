import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import NoPage from '../pages/NoPage'
import Resume from '../pages/Resume'
import Service from '../pages/Service'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import Single from '../pages/Single'

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="*" element={<NoPage></NoPage>} />
            <Route index element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/single' element={<Single/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
