let str = "Let's talk about Vue";

function strReverse(str) {
  let strArr = str.split(' ');
  let result = strArr.map(item => {
    return item.split("").reverse().join("");
  })
  return result.join(" ");
  
}

console.log(strReverse(str));