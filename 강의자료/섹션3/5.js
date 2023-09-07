function solution(s) {
  let count = 1;
  let temp = "";
  let result = "";
  for (let x of s + " ") {
    console.log(x, count);
    if (temp != x) {
      temp = x;
      if (count > 1) {
        result += count;
      }
      result += x;
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}

let str = "KKHSSSSSSSE";
let str2 = "KKHSSSSSSSEE";
console.log(solution(str));
console.log(solution(str2));
