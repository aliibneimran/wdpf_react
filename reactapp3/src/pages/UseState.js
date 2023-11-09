import React from 'react'
import { useState } from 'react'

export default function UseState() {
    const [user,setUser] = useState({
        name: "Imran",
        phone: "01787515196",
        email: "imran@gmail.com",
    });
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser((values) => ({...values, [name]:value}))
        };
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Your Data Is Submitted");
        console.log(user) ;
    }
  return (
    <>
        <div className='container'>
            <h1>UseState Learning</h1>
            <h6>{user.name}</h6>
            <h6>{user.phone}</h6>
            <h6>{user.email}</h6>
            {/* <button onClick={userUpdate}>Click Here</button><br /><br /> */}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' value={user.name} onChange={handleChange}/><br /><br />
                <input type="number" name='phone' value={user.phone} onChange={handleChange}/><br /><br />
                <input type="email" name='email' value={user.email} onChange={handleChange}/><br /><br />
                <button>Update</button>
            </form>
        </div>
    </>
  )
}
