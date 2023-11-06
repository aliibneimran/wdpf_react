import React from 'react'

const list = ["PHP","Java","DDD","GAVE"]

export default function Courses() {
    if(list.length>0){
  return (
    <div>
        <h1>Available Courses</h1>
        <ul>
        {list.map((item)=>
             <li>{item}</li>
        )}
        </ul>
    </div>
  )
}else{
    return(
        <NoCourse></NoCourse>
    )
}
}

export function NoCourse() {
    const myStyle = {
        color: "red",
        fontSize: "30px",
        fontWeight:"700",
        backgroundColor: "yellow",
        padding: "30px",
        textAlign: "center",
      };
    return (
      <div style={myStyle}>No Course Availabe</div>
    )
  }
