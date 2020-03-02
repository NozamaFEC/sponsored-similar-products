const express = require('express');
const App = express();
const db = require('./../mysql-database/db')

App.get('/', (req, res) => {
    res.send(db.getAllProductInfo(err, data) => {
        if(err) {
            console.log(err)
        }
        
    })
})   

App.listen(3000, ()=>{
    console.log(`listening on port 3000`)
});