const getTodos = async () => {
    console.log("1")
    
    
    const response = await fetch('todos.json')
    console.log("2")
    const data = await response.json()
    
   
    console.log("3")
    
    console.log(data)
    
    console.log("4")

};

getTodos()
// getTodos().then( res =>{
//     console.log("4")
//     console.log(res)
//     console.log("5")
// })


//
// console.log("Hello")
// getTodos()
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   async function demo() {
//     document.writeln('2...');
//     await sleep(2000);
//     document.writeln('3...');
//     document.writeln('5...');
//   }

//   document.writeln('1...');
//   demo().then(() => {
//       document.writeln('4.');
//   });
