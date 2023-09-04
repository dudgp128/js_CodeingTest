function solution(arr) {
  const score = new Array(arr.length).fill(1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        score[i]++;
      }
    }
  }
  return score;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [92, 92, 92, 90, 91];
console.log(solution(arr));
console.log(solution(arr2));
