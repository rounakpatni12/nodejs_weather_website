const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url =
    `http://api.weatherstack.com/current?access_key=1d8c8e27b38ffe0009440dd4a1e72e06&query=${latitude},${longitude}`;
  
    request({url:url,json:true},(error,response)=>{
    if (error) {
      callback('not able to connect',undefined)
    } else if(response.body.error){
      callback('wrong cordinate',undefined)
    }else{
     callback(undefined,{
       weather_day:response.body.current.weather_descriptions[0],
       Temperature:response.body.current.temperature
     })
    }
  })
  }
  module.exports=forecast
