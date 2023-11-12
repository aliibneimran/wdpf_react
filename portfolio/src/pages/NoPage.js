import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <>
      <div className='container' style={{textAlign:"center",padding:"100px"}}>
        <h1 style={{fontWeight:"bold",padding:"20px"}}>No Page Found</h1>
        <Link to=""><button className='btn btn-success' style={{fontWeight:"bold"}}>Go To Home</button></Link>
      </div>
    </>
  )
}
