//store data in local Storage
localStorage.setItem("name","Thihazaw")
localStorage.setItem("age",23)

//get data in local Storage
let name=localStorage.getItem('name')
let age=localStorage.getItem('age')
console.log(name);


//update data in local Storage
localStorage.setItem("name","Zawzaw")

//delete single data from local Storage
// localStorage.removeItem('age')

//delete all data from local Storage
// localStorage.clear()