function solution(arr1, arr2) {
  let min_array =
    Math.min(arr1.length, arr2.length) === arr1.length ? arr1 : arr2;
  let max_array = min_array === arr1 ? arr2 : arr1;
  let result = [];

  for (let i = 0; i < min_array.length; i++) {
    let co_index = max_array.find((element) => element === min_array[i]);
    if (co_index !== undefined) result.push(min_array[i]);
  }
  return result.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
