const userOne = {
    username: 'thihazaw',
    email: 'thihazaw@gmail.com',
    login() {
        console.log("User is login");
    },
    logout(){
        console.log("USer is loggout");
        
    }
}
// userOne.name ="thiha"
// userOne.email ="thiha@gmail.com"


const userTwo = {
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    login() {
        console.log("User is login");
    },
    logout(){
        console.log("USer is loggout");
        
    }
}
// const user =new User("gfdasgds")
console.log(userOne.username,userOne.email)
userOne.login()
console.log(userTwo.username,userTwo.email)
userTwo.login()