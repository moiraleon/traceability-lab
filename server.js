const express = require ('express');
const app = express();
const port =process.env.PORT ||5040

app.listen(port, function(){
    console.log('Server is up and running')
})