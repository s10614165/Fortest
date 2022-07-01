
let input = document.querySelector(".inputtext")
let inputdata = [];
let ullist = document.querySelector('.ullist')
let str = ''
input.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {

    axios.post('https://fathomless-brushlands-42339.herokuapp.com/todo1', {
      content: input.value, Ischeckcd: false
    })
    input.value = '';
    getdataandpast();
  }

})







// function postdata(data) {
//   axios.post('https://fathomless-brushlands-42339.herokuapp.com/todo1', {
//     data
//   })
// }



function getdataandpast() {
  axios.get('https://fathomless-brushlands-42339.herokuapp.com/todo1')
    .then(function (response) {
      response.data.forEach(function (item, index) {
        if (item.Ischeck) {
          str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index} checked=checked> <label for="" class="lilabel">${item.content}</label> <input type="button" value=""
              class= "vector" data-num=${index}></li >`;


        } else {
          str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index}><label  class="lilabel">${item.content}</label> <input type="button" value=""
              class= "vector" data-num=${index}></li >`;
          // finshdata++;
        }
      });
      ullist.innerHTML = str;
    }
    )
}





// axios.patch('https://fathomless-brushlands-42339.herokuapp.com/todo1/1', {
//   lastName: 'lee',

// })
function axiosdelete() {
  axios.get('https://fathomless-brushlands-42339.herokuapp.com/todo1')
    .then(function (response) {
      response.data.length
      for (let index = 1; index <= response.data.length; index++) {
        axios.delete(`https://fathomless-brushlands-42339.herokuapp.com/todo1/${index}`, {
        })

      }

    })

}

// axiosdelete();


