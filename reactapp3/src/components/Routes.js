import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import NoPage from '../pages/NoPage'
import UseState from '../pages/UseState'
import UseEffect from '../pages/UseEffect'
import UseContext from '../pages/UseContext'

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="*" element={<NoPage></NoPage>} />
            <Route index element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/usestate' element={<UseState/>}></Route>
            <Route path='/useeffect' element={<UseEffect/>}></Route>
            <Route path='/usecontext' element={<UseContext/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
