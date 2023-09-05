function solution(s) {
  const arr = Array.from(s + " ");
  let temp = arr[0];
  let count = 0;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === temp) {
      count++;
    } else {
      result += count !== 1 ? temp + count : temp;
      temp = arr[i];
      count = 1;
    }
  }
  return result;
}

let str = "KKHSSSSSSSE";
let str2 = "KKHSSSSSSSEE";
console.log(solution(str));
console.log(solution(str2));
