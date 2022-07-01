let data = [];
const listinput = document.querySelector('#ListInput');
const addbtn = document.querySelector('#ListAdd');
const listul = document.querySelector('.listul');
const deletebtn = document.querySelectorAll('.vector');
const divtitle = document.querySelector('.c-listtitle');
const todonum = document.querySelector('.todonum');
const cleanbtn = document.querySelector('.cleanfinishbtn');
// console.log(todonum);
// 綁定
init();
addbtn.addEventListener("click", function (e) {
  if (listinput.value === '') {
  } else {
    axios.post('https://fathomless-brushlands-42339.herokuapp.com/todo1', {
      content: listinput.value, Ischeckcd: false
    })
    listinput.value = '';
    getrespons(data)
    // console.log(data);
    addlist(data);

  }
})
listinput.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {
    if (listinput.value === '') {

    } else {
      axios.post('https://fathomless-brushlands-42339.herokuapp.com/todo1', {
        content: listinput.value, Ischeckcd: false
      })
      listinput.value = '';
      init();

      // addlist(data);
    }
  }
})
listul.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") === 'vector') {
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    addlist(data);
  };
  // 刪除資料
  if (e.target.getAttribute("class") == 'donebox') {
    // console.log(e.target.getAttribute("class"));
    const checkbox = document.querySelectorAll(".donebox");
    // console.log(num);
    data.forEach(function (item, index) {
      if (checkbox[index].checked === true) {
        item.Ischeck = true;
        return
      } else if (checkbox[index].checked === false) {
        // data.push(item[num].Ischeck = "");
        item.Ischeck = false;
      }
    })
    console.log(data)
    addlist(data);
    // console.log(data);
  }
  // 增加斜線 完成
})
divtitle.addEventListener("click", function (e) {
  console.log(e.target.getAttribute('id'));
  if (e.target.getAttribute('id') === 'listAll') {
    getrespons(data)
    console.log(data);
    addlist(data);
  } else if (e.target.getAttribute('id') === 'listFinsh') {

    let finshdata = [];
    data.forEach(function (item, index) {

      if (item.Ischeck === true) {
        finshdata.push(item);

      };

    })
    addlist(finshdata);
  }
  else if (e.target.getAttribute('id') === 'listTodo') {
    let tododata = [];
    data.forEach(function (item, index) {
      // console.log(item);

      if (item.Ischeck === false) {
        tododata.push(item);
        console.log(tododata);

      };

    })
    addlist(tododata);

  }
})
cleanbtn.addEventListener('click', function () {
  data = [];
  addlist(data);
})
// 從input 新增


function addlist(ary) {
  let str = '';
  let finshdata = 0;
  ary.forEach(function (item, index) {
    console.log(item.content);
    if (item.Ischeck) {
      str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index} checked=checked> <label for="" class="lilabel">${item.content}</label> <input type="button" value=""
              class= "vector" data-num=${index}></li >`;


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
  // console.log(data);
  axios.get('https://fathomless-brushlands-42339.herokuapp.com/todo1')
    .then(function (response) {
      // console.log(response.data)

      getdata.push(response.data);
      console.log(getdata);
      return getdata;

    })
}



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


function init() {
  axios.get('https://fathomless-brushlands-42339.herokuapp.com/todo1')
    .then(function (response) {
      data = response.data;
      console.log(data);
      addlist(data);
    });
}