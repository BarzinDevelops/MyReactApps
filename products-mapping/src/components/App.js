import React from 'react'
import Products from './Products';
import productData from './myProductsData'

function App() {
const productComponents = productData
  .map(product => <Products key={product.id} prodObj={product} />)

  return (
    <div className="main-app-wrapper">
      {productComponents}
    </div>
  );
}

export default App;
