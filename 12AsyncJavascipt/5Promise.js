const getTodos =(resource) => {

    return new Promise(( resolve , reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=> {
        // console.log(request ,request.readyState)
        if(request.readyState == 4 && request.status ==200){
            
            const data = request.responseText
            resolve(data)
        }
        else if(request.readyState == 4){
            
            reject('Could not fetch Data')
        }
    })
    request.open('GET',resource)
    request.send()
    })
    }

    getTodos('todos.json').then( data => {
        console.log('promise resolved is ' ,data)
        return getTodos('mario.json')
    }).then(res =>{
        console.log('promise resolved 2 is ' ,res)
    }).catch( err => {
        console.log('promise Rejected is ' ,err)
    })
   


    // const getSomething = () => {

    //     return new Promise(( resolve , reject) => {
    //         //fetch Something
    //         resolve(' Some Data');
    //         // reject('Some Error')
    //     });

    // }
    // getSomething().then((data) => {
    //      console.log(data)
    // }).catch((err) => {
    //     console.log(err)
    // })