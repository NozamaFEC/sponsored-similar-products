import React from 'react'
import Products from '../carouselCard.js/products'

const ListOfProducts = () => {
    return(
        <ol className='ListOfProducts'>
            {/* limit the amount of products that need to be rendered here to 7 */}
            
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
        </ol>
    )
}

export default ListOfProducts;