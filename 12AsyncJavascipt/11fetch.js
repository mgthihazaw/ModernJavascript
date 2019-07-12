fetch('todos.json')
.then( data =>{
    console.log("Response Data is ", data)
   return data.json()
}).then(data =>{
    console.log( data)
}).catch( err => {
    console.log("Reject Error is ",err);
    
})