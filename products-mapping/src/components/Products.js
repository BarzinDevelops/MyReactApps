import React from 'react'


const Products = (props) => {
    props = props.prodObj
  return (
    <div className='product-wrapper'>
       <h3>{props.name}</h3> 
       <div className='product-details-wrapper'>

            <div className='product-image'>
                <img src="https://source.unsplash.com/100x100/?snacks"/>
            </div>
            <div className='product-details'>
                <p>Price: {props.price.toLocaleString("nl-NL", {style: "currency", currency: "EUR"})}</p>
                <p>Description: {props.description}</p>
            </div>

       </div>        
    </div>
  )
}

export default Products