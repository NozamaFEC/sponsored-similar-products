import React from 'react'
import Button from './carousel.js/previousButton'
import NextButton from './carousel.js/nextButton'
import ListOfProducts from './carousel.js/listOfProducts'

const SponsoredProducts = () => {
    return(
       <div className="carousel-inner">
           <Button />
           <ListOfProducts />
           <NextButton />
       </div>
    );
}

export default SponsoredProducts;