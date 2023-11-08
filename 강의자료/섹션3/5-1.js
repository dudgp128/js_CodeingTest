function solution(str) {
  let t = "";
  let count = 1;
  let result = "";
  for (let i of str + " ") {
    if (t !== i) {
      result += count > 1 ? t + count : t;
      count = 1;
      t = i;
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
