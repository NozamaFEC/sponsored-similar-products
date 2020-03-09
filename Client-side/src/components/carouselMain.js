import React, { component } from 'react';
import SponsoredProducts from './sponsoredProd';
import ProductHeader from './productHeader';

class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(

                <div className="carousel-container4">
                    <div className="carousel-container3">
                        <div className="carousel-container2">
                            <div className='carousel-container'>
                                <div className='cardholder'>
                                    <ProductHeader />
                                    <SponsoredProducts />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;