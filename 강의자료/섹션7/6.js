function solution(arr) {
  let result = [];
  let sorted = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== arr[i]) {
      result.push(i + 1);
    }
  }
  console.log(result);
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
console.log(solution(arr2));
