const path=require('path')
const express = require("express");
const hbs=require('hbs')
const urlgeo = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));

const publicDirectoryPath=path.join(__dirname,"../public")
const Viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')// for dynamic html files but extension will be hbs instead of html
app.set('views',Viewspath)// to customise views folder name to template default views folder will be look up
app.use(express.static(publicDirectoryPath)) //to use static html files
hbs.registerPartials(partialspath)
app.get("", (req, res) => {
//   res.send("<h1>welcome to home page</h1>");
res.render('index',{
    title:"weather app",
    place:'indore'
})
});

app.get("/about",(req,res)=>{
res.render('about',{
    info:"this is used for testing"
})  
})

app.get("/help",(req,res)=>{
    res.render('help',{
        message:"please help error occured"
    })  
    })
// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "rounak",
//       age: 24,
//     },
//     {
//       name: "khushal",
//       age: 19,
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   res.send("about page");
// });
app.get("/weather", (req, res) => {
if(!req.query.address){
  res.send({error:'Attach address please'})
}
else{
  urlgeo(req.query.address,(error,{location,latitude,longitude}={})=>{
    if(error){
      return res.send({error:'enter correct address'});
      }
    forecast(latitude,longitude,(error,forecastdata)=>{
      if(error){
        return res.send({error:'enter correct address'});
        
      }
      
      res.send({address:location,
      Temperature:forecastdata.Temperature
    
      });
      
    })
    
    })
}
});



app.get("/help/*", (req, res) => {
  res.render('404',{
    errorMessage:`help article not found `
  })
});

app.get("*", (req, res) => {
  res.render('404',{
    errorMessage:'page not found'
  })
});
app.listen(3000, () => {
  console.log("server running well");
});
