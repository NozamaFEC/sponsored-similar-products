import React, { component } from 'react';
import SponsoredProducts from './sponsoredProd';
import ProductHeader from './productHeader';

class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
                <div className='carousel-container'>
                    <ProductHeader />
                    <SponsoredProducts />
                </div>
        );
    }
}

export default App;