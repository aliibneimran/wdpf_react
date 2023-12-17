import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const {id,product,photo,price}= props.data
  return (
    <div>
        {/* <div className="col-lg-4 col-md-6"> */}
          <div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg={'/assets/uploads/'+ photo}>                        
            <div className="ltn__banner-info">
              <h3><Link to="/shop"> {product} </Link></h3>
              <p> Great Deals Available</p>
              <mark>{price}</mark>
            </div>
            {/* <button className='btn btn-info p-2'>Add To Cart</button> */}
          </div>
          <button className='btn btn-info p-2 my-3'>Add To Cart</button>
        {/* </div> */}
    </div>
  )
}
