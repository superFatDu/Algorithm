// 给定一个字符串s，计算具有相同数量0和1的非空（连续）子字符串的数量，并且这些子字符串中的所有0和所有的1都是组合在一起的。
// input: 00110011
// output: 6

var countBinarySubstring = function(s) {
  let pre = 0; // 前一个数字连续的个数，因为第一位的时候没有前一个数
  let cur = 1; // 当前数字连续的个数
  let result = 0; // 结果的个数
  for(let i = 0; i < s.length-1; i++) {
    if(s[i] === s[i + 1]) { // 如果后一个数字等于前一个数字的话，当前数字的个数加1
      cur += 1;
    } else { // 如果后一个数字不等于前一个数字的话，前一个数字的个数等于当前这个书的个数，当前的个数重新等于1
      pre = cur;
      cur = 1;
    }
    if(pre >= cur) { // 如果前一个数字的个数大于等于当前数字的个数的话，结果加1
      result += 1;
    }
  }
  return result;
}

let str = "00110011";
console.log(countBinarySubstring(str));