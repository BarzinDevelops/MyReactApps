import React from 'react'


const Products = (props) => {
    props = props.prodObj
  return (
    <div className='product-wrapper'>
       <h3>{props.name}</h3> 
       <p>Price: €{props.price}</p>
       <p>Description: {props.description}</p>
        
    </div>
  )
}

export default Products