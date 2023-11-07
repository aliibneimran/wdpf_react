import React, { useState } from 'react';


export default function MyForm() {
    const[name,setName] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");
    const[address,setAddress] = useState("");
    console.log(name);
    console.log(phone);
    console.log(email);
  return (
    <div>
        <h1>Entry Form</h1>
        <form action="">
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/><br/><br/>
          <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Your Phone'/><br/><br/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/><br/><br/>
          <textarea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Your Address'></textarea><br/><br/>
          <button>Submit</button>
        </form><br/>
        Name : {name}<br/>
        Phone : {phone}<br/>
        Email : {email}<br/>
        Address : {address}
    </div>
  )
}
