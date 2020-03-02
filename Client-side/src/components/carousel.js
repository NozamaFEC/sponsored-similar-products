import React, { component } from 'react';
import sponsoredProducts from './sponsoredProd';
import productHeader from './productHeader';

class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div>
                <sponsoredProducts />
                <productHeader />
            </div>
        );
    }
}

export default App;