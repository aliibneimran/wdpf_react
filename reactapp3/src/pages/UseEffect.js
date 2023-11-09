import React from 'react'
import { useState,useEffect } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(5);
    useEffect(()=>{
        setPerson(()=>count*2)
    },[count]);
  return (
    <>
        <div className='container'>
            <h1>UseEffect</h1>
            <h6>{count}</h6>
            <h6>{person}</h6>
            <button onClick={()=>setCount(()=>count+1)}>Change</button>
        </div>
    </>
  )
}
