function solution(str, t) {
  let array = new Array(str.length).fill(0);
  let result = new Array(str.length).fill(0);
  let count = 0;
  let point = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      array[i] = 0;
      while (count > 0) {
        array[point++] = count--;
      }
      point++;
    } else {
      count++;
    }
  }
  count = 0;
  point = str.length - 1;
  for (let i = str.length - 1; i > -2; i--) {
    if (i < 1) {
      console.log(count, point, i);
    }
    if (str[i] === t || i === -1) {
      while (count > 0) {
        result[point--] = count--;
      }
      point--;
    } else {
      count++;
    }
  }
  console.log(array, result);
}

let str = "teachermode";
console.log(solution(str, "e"));
