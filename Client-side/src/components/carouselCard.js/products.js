import React from 'react'
import PictureDescription from './pictureDescription'
import RatingStars from './rating'

const Products= () => {
    return(
        <li className='Product'>
                {/* render each part of this specific component into this main component */}
                <a>
                    <PictureDescription />
                    <RatingStars />
                </a>
        </li>
    )
}

export default Products;