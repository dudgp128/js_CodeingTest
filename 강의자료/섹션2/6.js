function solution(arr) {
  let result = 0;
  let row_sum = (column_sum = right_sum = left_sum = 0);

  for (let i = 0; i < arr.length; i++) {
    row_sum = column_sum = 0;
    for (let j = 0; j < arr.length; j++) {
      row_sum += arr[i][j];
      column_sum += arr[j][i];
      if (i === j) {
        right_sum += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        left_sum += arr[i][j];
      }
    }
    result = Math.max(result, row_sum, column_sum, right_sum, left_sum);
  }
  return result;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
