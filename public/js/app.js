// fetch('http://puzzle.mead.io/puzzle')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//       console.log(data);
      
      
//     })
// })

// fetch('http://localhost:3000/weather?address=japan').then((response)=>{
//     response.json().then((data)=>{
//        if (data.error) {
//            console.log('error occured');
           
//        } else {
           
//            console.log(data);
//            console.log(data.address);
//            console.log(data.Temperature);
//        }
        
//     })
// })

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const message_show_error=document.querySelector('#message_show_error')
const message_show_result=document.querySelector('#message_show_result')

// weatherForm.addEventListener('submit',(e)=>{

//     e.preventDefault()
//     message_show_result.textContent='Loading...'
//     const location=search.value
// fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
//     response.json().then((data)=>{
//        if (data.error) {
//         //    console.log('error occured');
//            message_show_error.textContent='error occured'
//            message_show_result.textContent=''

//        } else {
           
//            console.log(data);
//            console.log(data.address);
//            console.log(data.Temperature);
//            message_show_error.textContent=''
//            message_show_result.innerHTML=`<b>Address is: ${data.address} <br>Tempertaure is: ${data.Temperature}&#8451;</b>`
//        }
        
//     })
// })




// })


weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()
    message_show_result.textContent='Loading...'
    const location=search.value
fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
       if (data.error) {
        //    console.log('error occured');
           message_show_error.textContent='error occured'
           message_show_result.textContent=''

       } else {
           
           console.log(data);
           console.log(data.address);
           console.log(data.Temperature);
           message_show_error.textContent=''
           message_show_result.innerHTML=`<b>Address is: ${data.address} <br>Tempertaure is: ${data.Temperature}&#8451;</b>`
       }
        
    })
})




})