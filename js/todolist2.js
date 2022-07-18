let data = [];
const listinput = document.querySelector('#ListInput');
const addbtn = document.querySelector('#ListAdd');
const listul = document.querySelector('.listul');
const deletebtn = document.querySelectorAll('.vector');
const divtitle = document.querySelector('.c-listtitle');
const todonum = document.querySelector('.todonum');
const cleanbtn = document.querySelector('.cleanfinishbtn');
// console.log(todonum);

init();
addbtn.addEventListener("click", function (e) {
  if (listinput.value === '') {
  }
  else {

    axios.post('https://fathomless-brushlands-42339.herokuapp.com/todo1', {
      content: listinput.value, Ischeckcd: false
    }).then(function () {
      listinput.value = '';
      init();
    })


    // addlist(data); 


  }
})
listinput.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {
    if (listinput.value === '') {

    } else {
      axios.post('https://fathomless-brushlands-42339.herokuapp.com/todo1', {
        content: listinput.value, Ischeckcd: false
      }).then(function () {
        listinput.value = '';
        init();
      })


      // addlist(data); 
    }
  }
})
listul.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") === 'vector') {
    let num = parseInt(e.target.getAttribute("data-num"));
    // console.log(num);
    // console.log(data);
    // console.log(data.id);
    // console.log(data[num].id);

    axios.delete(`https://fathomless-brushlands-42339.herokuapp.com/todo1/${data[num].id}`, {
    }).then(function () {
      init();
    })



  };
  // 刪除資料
  if (e.target.getAttribute("class") == 'donebox') {
    // console.log(e.target.getAttribute("class"));
    const checkbox = document.querySelectorAll(".donebox");
    // console.log(num);
    // console.log(data);
    data.forEach(function (item, index) {
      if (checkbox[index].checked === true) {

        axios.patch(`https://fathomless-brushlands-42339.herokuapp.com/todo1/${item.id}`, {
          Ischeckcd: true
        }).then(function () {

          init();
        })
        return
      } else if (checkbox[index].checked === false) {
        axios.patch(`https://fathomless-brushlands-42339.herokuapp.com/todo1/${item.id}`, {
          Ischeckcd: false
        }).then(function () {

          init();
        })

      }
    })
  }
  // 增加斜線 完成
})
divtitle.addEventListener("click", function (e) {
  if (e.target.getAttribute('id') === 'listAll') {

    init();
  } else if (e.target.getAttribute('id') === 'listFinsh') {
    // console.log(data);
    let finshdata = [];
    data.forEach(function (item) {
      if (item.Ischeckcd === true) {
        finshdata.push(item);
        console.log(this.addlist);
      };
      // console.log(finshdata);
    })
    addlist(finshdata);
    todonum.textContent = `完成${finshdata.length}個代辦事項`;
  }
  else if (e.target.getAttribute('id') === 'listTodo') {
    let tododata = [];
    data.forEach(function (item) {
      // console.log(item);

      if (item.Ischeckcd === false) {
        tododata.push(item);


      };

    })
    addlist(tododata);

  }
})
cleanbtn.addEventListener('click', function () {
  data.forEach(function (item, index) {
    if (item.Ischeckcd === true) {
      axios.delete(`https://fathomless-brushlands-42339.herokuapp.com/todo1/${item.id}`, {
      }).then(function () {

        init();
      })
    }
  })

})
// 從input 新增


function addlist(ary) {
  let str = '';
  let finshdata = 0;
  let dodata = 0;
  ary.forEach(function (item, index) {

    if (item.Ischeckcd) {
      str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index} checked=checked> <label for="" class="lilabel">${item.content}</label> <input type="button" value=""
              class= "vector" data-num=${index}></li >`;
      dodata++

    } else {
      str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index}><label  class="lilabel">${item.content}</label> <input type="button" value=""
              class= "vector" data-num=${index}></li >`;
      finshdata++;
    }
  });
  listul.innerHTML = str;

  todonum.textContent = `${finshdata}個代辦事項`;
}


function getrespons() {
  let getdata = []
  axios.get('https://fathomless-brushlands-42339.herokuapp.com/todo1')
    .then(function (response) {
      // console.log(response.data)

      getdata.push(response.data);
      console.log(getdata);
      return getdata;

    })
}


// 刪除所有資料用
// axiosdelete();
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



function init() {
  axios.get('https://fathomless-brushlands-42339.herokuapp.com/todo1')
    .then(function (response) {
      data = response.data;
      // console.log(data);
      addlist(data);
    });
}