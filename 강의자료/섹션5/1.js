function solution(arr1, arr2) {
  let result = [];
  let arr1_index = 0;
  let arr2_index = 0;

  while (arr1_index < arr1.length && arr2_index < arr2.length) {
    if (arr1[arr1_index] < arr2[arr2_index]) {
      result.push(arr1[arr1_index]);
      arr1_index++;
    } else {
      result.push(arr2[arr2_index]);
      arr2_index++;
    }
  }

  result = result.concat(
    arr1_index === arr1.length
      ? arr2.splice(arr2_index, arr2.length)
      : arr1.splice(arr1_index, arr1.length)
  );

  return result;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
