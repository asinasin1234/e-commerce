import React from 'react'
import ProductHero from '../../components/ProductHero/ProductHero'

function Products({ wishlist, addToCart ,cart , toggleWishlist}) {
  return (
    <div>
      <ProductHero wishlist={wishlist} addToCart={addToCart} toggleWishlist={toggleWishlist} cart={cart} />
    </div>
  )
}

export default Products;