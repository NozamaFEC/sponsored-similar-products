import React from 'react'
import Button from './previousButton'
import NextButton from './nextButton'
import ListOfProducts from './listOfProducts'

const SponsoredProducts = () => {
    return(
       <div className="carousel-inner">
           <Button />
           <ListOfProducts className="listOfProducts"/>
           <NextButton className="nextbutton"/>
       </div>
    );
}

export default SponsoredProducts;