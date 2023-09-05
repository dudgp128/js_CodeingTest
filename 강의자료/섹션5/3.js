function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  let union = [];

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) {
      answer++;
      union.push(arr.slice(lt, rt + 1));
    }
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) {
        answer++;
        union.push(arr.slice(lt, rt + 1));
      }
    }
  }
  console.log(union);
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
