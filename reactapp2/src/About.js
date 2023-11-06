import React from 'react'
import ButtonOutside from './Button'

function ButtonInside(abc){
    return(
        <>
        <button>Button Inside {abc.info.color}</button>
        </>
    )
}

export default function About() {
    const btnifo = {size: "big",color: "green"};
  return (
    <>
    <div>
        <h1>About Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <ButtonInside info={btnifo}></ButtonInside>
        <ButtonOutside></ButtonOutside>
    </div>
    </>
    
  )
}
