let str = "Let's talk about Vue";

function strReverse(str) {
  let strArr = str.split(' ');
  let result = strArr.map(item => {
    return item.split("").reverse().join("");
  })
  return result.join(" ");
  
}

console.log(strReverse(str));


// 优化 => 减少冗余
function strReverse1(str) {
  return str.split(" ").map(item => {
    return item.split("").reverse().join("");
  }).join(" ");
}

console.log(strReverse1(str));

function strReverse2(str) {
  return str.match(/[\w`]+/g).map(item => {
    return item.split("").reverse().join("");
  }).join(" ");
}

// Array.prototype.split
// Array.prototype.match
// Array.prototype.map
// Array.prototype.reverse
// Array.prototype.join