import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends Component {
    constructor() {

    }
    gotMoney() {
        axios.get('/')
        .then((data) => {
            return (
                <div>Hello world, we need this to work</div>
            )
        })
        .catch((error) => {
            console.log(error);
        })
        .then()
                
    }
}

    render() {
        return (
            <div>
            <gotMoney />
            this component must render
            </div>
        )
    }

export default App;