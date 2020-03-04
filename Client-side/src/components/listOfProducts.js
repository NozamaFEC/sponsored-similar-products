import React from 'react'
import Products from './products'

const ListOfProducts = () => {
    return(
        <ol className='ListOfProducts'>
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