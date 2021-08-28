const request=require('request')
const urlgeo=(adrress,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${adrress}.json?access_token=pk.eyJ1Ijoicm91bmFrMDA5IiwiYSI6ImNrc3FjOHM2cDBiNjkyd29kOWY4MGJscHkifQ.jS8xSyJYfJqXnGcO922-tQ&limit=1`
    request({url:url,json:true},(error,response)=>{
      if (error) {
        callback('unnable to connect',undefined)
      } else if(response.body.features.length===0) {
        callback('address not found',undefined)
      }else{
        callback(undefined,{
          longitude:response.body.features[0].center[0],
          latitude:response.body.features[0].center[1],
          location:response.body.features[0].place_name
        })
      }
    })
    }

module.exports=urlgeo    