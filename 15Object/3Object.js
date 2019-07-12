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

const userone = new User("thihazaw",23)
const usertwo = new User("thiha",20)
userone.login()
userone.incScore().incScore()
usertwo.login()