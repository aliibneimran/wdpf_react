import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import About from '../pages/About'

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
