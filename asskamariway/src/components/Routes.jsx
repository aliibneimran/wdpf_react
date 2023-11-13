// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import NoPage from '../pages/NoPage'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function Main() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path="*" element={<NoPage></NoPage>} />
                <Route index element={<Home></Home>}></Route>
                <Route path='/' element={<About></About>}></Route>
                <Route path='/' element={<Contact></Contact>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
