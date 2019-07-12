const users = [
    {
      "userId": 1,
      "id": 1,
      "title": "This is IOT",
      "completed": true
    },
    {
      "userId": 1,
      "id": 2,
      "title": "This is  AI",
      "completed": true
    },
    {
      "userId": 1,
      "id": 3,
      "title": "This is Web",
      "completed": false
    }
    
]
const avaUsers =users.filter( user => user['completed'])
export  {avaUsers,users as default};