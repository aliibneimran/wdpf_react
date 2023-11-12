import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Insert() {
    const [userInfo, setUserInfo] = useState({});
    const handleSubmit = (e)=>{
        e.preventDefault();
        // alert("Submit");
        userInsert();
    }
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo((val)=>({...val, [name]:value}));
    }
    const userInsert = ()=>{
        axios.post("http://localhost/wdpf_react/reactapp3/api/insert.php",{data:userInfo}).then(res=>{
            // alert("Inserted");
            console.log(res.data)
        })
    }
    console.log(userInfo)
    // const [] = useEffect();
  return (
    <div className='container'>
        <h1>Entry Form</h1>
        <form action="" onSubmit={handleSubmit} className='form-control'>
            <input type="text" className='form-control' name='name' placeholder='Enter Your Name' value={userInfo.name} onChange={handleChange}/><br/>
            <input type="email" className='form-control' name='email' placeholder='Enter Your Email'  value={userInfo.email} onChange={handleChange}/><br/>
            <button name='submit' className='btn btn-success'>Submit</button>
        </form>
    </div>
  )
}
