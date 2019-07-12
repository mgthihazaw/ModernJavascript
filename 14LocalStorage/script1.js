const todos = [
    {
        "userId": 1, "id": 1,
        "title": "This is Laravel",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "This is  Ruby",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "This is Python",
        "completed": false
    }

];
data =JSON.stringify(todos)
localStorage.setItem('data',data)

const storedData =localStorage.getItem('data')
console.log(JSON.parse(storedData))
