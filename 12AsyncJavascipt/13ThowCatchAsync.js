const getTodos = async () => {
    console.log("4")
    const response = await fetch('todos.json')
    let data = ""
    if (response.status !== 200) {
        throw new Error('Error Occur')
    }
    data=response.json()
    console.log("5")
    return data

};

// const test=getTodos()
// console.log(test)
getTodos().then(res => {

    console.log(res)

}).catch(err => {
    console.log(err.message)
})

