const express = require ('express');
const app = express();
const path = require('path');
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'a8f70a4ed99e49ad94738657595719df',
  captureUncaught: true,
  captureUnhandledRejections: true
});



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
    return icecream === icecream
})
try {
    if (index === -1 && type !== "") {
      icecream.push(type);
      rollbar.info('An icecream has been added')
      res.status(200).send(icecream);
    } else if (type === "") {
        rollbar.error('Someone entered an invalid input')
      res.status(400).send("must provide an icecream type");
    } else {
        rollbar.error('Someone has entered an already listed input')
      res.status(400).send("that icecream is already listed");
    }
  } catch (err) {
      rollbar.error(err)
    console.log(err)
  }
const port =process.env.PORT ||5040
app.listen(port, function(){
    console.log('Server is up and running')
})