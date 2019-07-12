const getTodos =(resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=> {
        // console.log(request ,request.readyState)
        if(request.readyState == 4 && request.status ==200){
            
            const data = request.responseText
            callback(undefined ,data)
        }
        else if(request.readyState == 4){
            
            callback("could not fetch data",undefined)
        }
    })
    request.open('GET',resource)
    request.send()
    
    }
    console.log(1)
    getTodos('todos.json',(err,data) => {
        if(err == undefined){
           
            console.log(data)
        }else{
            console.log(err)
        }
        
    })
    console.log(2)
    
    