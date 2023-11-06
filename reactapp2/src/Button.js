import React from 'react'

export default function ButtonOutside() {
  const shoot = ()=> {
    alert("Great Shot");
  }
  const shoot1 = (a)=> {
    alert(a);
  }
  return (
    <>
    <button onClick={shoot}>Button Outside</button>
    <button onClick={()=>{shoot1("Goal!")}}>Button Outside with parameter</button>
    </>
    
  )
}