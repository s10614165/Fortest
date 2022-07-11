const emailinput = document.querySelector('.emailinput')
const passwordinput = document.querySelector('.passwordinput')
const loginbtn = document.querySelector('#loginbtn')


loginbtn.addEventListener("click", () => {
  let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  let email = emailinput.value;
  let password = passwordinput.value;
  let ckecklogin = 0;

  if (!emailRule.test(email)) {
    let emailtext = document.querySelector('.emailtext')
    emailtext.style.display = "block"
    emailtext.textContent = "填入信箱有誤";
  } else {
    let emailtext = document.querySelector('.emailtext')
    emailtext.style.display = "none"
    ckecklogin++


  }
  if (password.length < 6) {

    let passwordtext = document.querySelector('.passwordtext')
    passwordtext.style.display = "block"
    passwordtext.textContent = "密碼長度不可小於6個字元";


  } else {
    let passwordtext = document.querySelector('.passwordtext')
    passwordtext.style.display = "none"
    ckecklogin++

  }

  if (ckecklogin === 2) {
    axios.post('https://todoo.5xcamp.us/users/sign_in', {

      user: {
        email: `${email}`,
        password: `${password}`
      }
    }
    ).then((response) => {
      console.log(response)

    }).catch(function (error) {
      // 失敗會回傳的內容
      let errordata = error;
      console.log(errordata);
      console.log(errordata.response.data.message);
      console.log(errordata.response.data.error);
    })


  }


})
