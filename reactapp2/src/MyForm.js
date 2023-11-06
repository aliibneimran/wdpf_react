import React, { useState } from 'react';


export default function MyForm() {
    const[name,setName] = useState("");
    const[phone,setPhone] = useState("");
  return (
    <div>
        <h1>Entry Form</h1>
        <form action="">
          Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
          Phone : <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </form><br/>
        Name : {name}<br/>
        Phone : {phone}
    </div>
  )
}
