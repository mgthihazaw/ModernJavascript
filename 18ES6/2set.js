//arry
// const nameArr = ['thiha' ,'mgmg' ,'zawzaw' ,'zawzaw']


//set 
// const nameSet = new Set(nameArr)
// console.log(nameSet)

// const uniqueNames = [...nameSet]
// console.log(uniqueNames)


// const uniqueNames1 = [...new Set(nameArr)]
// console.log(uniqueNames1)

const ages =new Set();
ages.add(20);
ages.add(22);
ages.add(24);

ages.delete(22)

console.log(ages.size,ages.has(20),ages.has(50))

ageArr =[...ages]
console.log(ageArr)