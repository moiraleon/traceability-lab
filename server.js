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

const index =icecream.findIndex((icecream)=>{
    return icecream === type
})
try {
    if (index === -1 && type !== "") {
      students.push(type);
      res.status(200).send(icecream);
    } else if (type === "") {
      res.status(400).send("must provide an icecream type");
    } else {
      res.status(400).send("that icecream is already listed");
    }
  } catch (err) {
    // do something
  }
const port =process.env.PORT ||5040
app.listen(port, function(){
    console.log('Server is up and running')
})