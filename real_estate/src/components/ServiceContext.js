import React, { useContext, useState } from 'react'

export const ServiceContext = useContext(null);
export default function ServiceContextPrvider(props) {
    const [cartItem, setCartItem] = useState();
    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId] +1}));
    }
    const removeCart = ()=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId] -1}));
    }
  return (
    <div>
        <ServiceContext.ServiceContextPrvider>{props.children}</ServiceContext.ServiceContextPrvider>
    </div>
  )
}
