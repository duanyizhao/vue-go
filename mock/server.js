let express = require('express')
let fs = require('fs')
let app = express();

let sliders = require('./sliders')

function read(callback){
  fs.readFile('./book.json','utf-8',function(err,data){
    if(err){
      console.error(err)
    }else {
      data = data.length===0?[]:data;
      callback(data)
    }
  })
}


app.get('/api/slider',function(req,res){
  res.send(sliders);
})
app.get('/api/hot',function(req,res){
  read(function(data){
    setTimeout(function(){
      res.send(data)

    },2000)
  })
})
app.listen(3000)
