const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request ,request.readyState)
        if (request.readyState == 4 && request.status == 200) {
            // console.log(request.responseText)
            const data = request.responseText
            callback(undefined, data)
        }
        else if (request.readyState == 4) {
            // console.log("could not fetch data")
            callback("could not fetch data", undefined)
        }
    })
    request.open('GET', 'todos.json')
    request.send()

}
console.log(1)
getTodos(
    (err, data) => {
        if (err == undefined) {

            console.log(data)
        } else {
            console.log(err)
        }

    })
console.log(2)

