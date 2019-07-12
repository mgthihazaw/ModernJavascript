class User {
    constructor(name,age){
        //set up properties
        this.username = name
        this.age = age
        this.score = 1
    }
    login(){
        let data =`${this.username} is just login`
        console.log(data)
    }
    logout(){
        let data =`${this.username} is just logout`
        console.log(data)
    }
    incScore(){
        this.score +=1
        let data =`${this.username} score is ${this.score}`
        console.log(data)
        console.log(this)
        return this
    }

}
class Admin extends User {
   constructor(name,age,email){
       super(name,age)
       this.email =email
   }
   deleteUser(user){
       users =users.filter(u => {
           return u.username!=user.username
       })
   }
}

const userone = new User("zawzaw",23)
const usertwo = new User("thiha",20)
// userone.login()
// userone.incScore().incScore()
// usertwo.login()
const admin =new Admin("thihazaw",23,"thihazaw@gmail.com")
// admin.login();
// admin.incScore().incScore()
let users =[userone,usertwo,admin]
console.log(users)
admin.deleteUser(usertwo)
console.log(users)
