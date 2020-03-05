const express = require('express');
const App = express();
const path = require('path');

App.use(express.static(path.join(process.cwd(), '/Client-side/dist')))

App.route('/bundle')
    .get((req, res) => {
        res.sendFile(path.join(process.cwd(), '/client/dist/bundle.js'))
    })

App.listen(4000, ()=>{
    console.log(`listening on port 4000`)
});