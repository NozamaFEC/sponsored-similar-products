const express = require('express');
const App = express();
const path = require('path');

App.use(express.static(path.join(process.cwd(), '/Client-side/dist')))

App.listen(3000, ()=>{
    console.log(`listening on port 3000`)
});