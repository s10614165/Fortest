// let obj = {

//   user: {
//     email: "123qqq@gmail.com",
//     nickname: "qqq",
//     password: "123456"

//   }
// }




axios.post('https://todoo.5xcamp.us/users', {

  user: {
    email: "123www@gmail.com",
    nickname: "qqq",
    password: "123456"

  }
}
).then((response) => {
  console.log(response)

}).catch(function (error) {
  // 失敗會回傳的內容
  let errordata = error;
  console.log(errordata.response.data.error);
})

// console.log(1);
// let Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxODYzIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjU3NTEwNjgyLCJleHAiOjE2NTg4MDY2ODIsImp0aSI6IjU3OGI0NjE2LTNlYTQtNGFhOS1iM2YzLTAxNTJmNTU2YzVmOCJ9.3FSf2vwEjWY2CoB3JgBQVQelAxA_ruuFM-MogLcpHK4';
// console.log(Authorization)
// axios.get('https://todoo.5xcamp.us/todos', { headers: { Authorization } }).then(res => {
//   console.log(res);
// })