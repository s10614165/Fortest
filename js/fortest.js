func1(2);
func1(4);
func1(8);


function func1(num) {
  console.log(num * 3);
}

func2("a,b,c");
func2("hi,hello");

function func2(str) {
  let data = []
  data.push(str.split(","));
  console.log(data);
}
const s = 18.5;
const m = 24;
bmi(178, 20);
bmi(178, 65);
bmi(178, 77);
bmi(178, 89);
bmi(178, 100);
bmi(178, 200);

function bmi(cm, kg) {
  let bmi2 = kg / ((cm / 100) ** 2);
  if (bmi2 < 18.5) {
    console.log("體重過輕");
  } else if (bmi2 > s && bmi2 < m) {
    console.log("正常範圍");
  } else {
    console.log("異常範圍")
  }
}


checkPhoneNumber("0855717222");
checkPhoneNumber("331");
checkPhoneNumber("01839398");
checkPhoneNumber("0877121333");

function checkPhoneNumber(str) {
  let reg = /^08/
  console.log(reg.test(str))
}
multiplication8(3);
multiplication8(5);

function multiplication8(num) {
  const eight = 8;
  for (let index = 1; index <= num; index++) {
    console.log(`${eight}*${index}=${eight * index}`);

  }
}
const numAry = [1, 3, 4, 6, 8];
checkNum(0);
checkNum(3);
checkNum(6);
checkNum(20);

function checkNum(num) {
  let newdata = [];
  if (num === 0) {
    console.log(newdata);
  } else {
    numAry.forEach(function (item) {
      if (num >= item) {
        newdata.push(item)
      }
    })
    console.log(newdata);
  }

}
prime(7);
prime(15);

function prime(num) {
  let newdata = [];
  for (i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      newdata.push(i);

    }
  }
  console.log(newdata.join(','));
}
obj(2).y();
obj(50).y();
// obj(50);
function obj(a) {
  return {

    y: function () { console.log(a); }
  }

}


const a = [1, 3, 4, 6, 8];

// input 輸入
checkSame([3, 4, 9])
checkSame([1, 2, 3, 4, 5, 6, 9])

function checkSame(ary) {
  let newdata = [];
  a.forEach(function (item) {
    ary.forEach(function (item1) {
      if (item1 === item) {
        newdata.push(item1);
      }
    })
  })
  console.log(newdata);
}


lotto();
lotto();
lotto();

function lotto() {
  let i = 0;
  let raodom;
  let newdata1 = [];
  while (i < 5) {
    raodom = (Math.floor(Math.random() * 10) + 1);
    if (!newdata1.includes(raodom)) {
      newdata1.push(raodom);
      i += 1;
    }

  }
  console.log(newdata1);
}