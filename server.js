const express = require ('express');
const app = express();
const path = require('path');

app.use(express.json());

const icecream =['chocolate', 'pistachio', 'mango sorbet']

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/api/students', function(req,res){
    let {type} =req.body;
    console.log(type)
})





const port =process.env.PORT ||5040

app.listen(port, function(){
    console.log('Server is up and running')
})