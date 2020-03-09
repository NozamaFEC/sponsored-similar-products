import React from 'react'
import Products from '../carouselCard.js/productsShaker.js/products'
import Products2 from '../carouselCard.js/productsShaker.js/products2'
import Products3 from '../carouselCard.js/productsShaker.js/products3'
import Products4 from '../carouselCard.js/productsShaker.js/products4'
import Products5 from '../carouselCard.js/productsShaker.js/products5'
import Products6 from '../carouselCard.js/productsShaker.js/products6'
import Products7 from '../carouselCard.js/productsShaker.js/products7'

const ListOfProducts = () => {
    return(
        <ol className='ListOfProducts'>
            <Products />
            <Products2 />
            <Products3 />
            <Products4 />
            <Products5 />
            <Products6 />
            <Products7 />
        </ol>
    )
}

export default ListOfProducts;