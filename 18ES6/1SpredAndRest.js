//rest parameter
const double = (...nums) =>{
    console.log(nums)
   return nums.map(num => num*2)

}

const result = double(1,2,3,4,5,6)
console.log(result)

//spread parameter

const people = ['thiha','zaw','mg']
const member =[1,2,3,...people]
console.log([...people,...member])


//spred syntax

const person = { name : 'thiha',age : '22'}
const assign =person
assign.location = "mdy"
const clone = {...person,location : "sgg"}
console.log(assign,clone)

