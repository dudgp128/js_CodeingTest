function solution(m, arr) {
  let answer = [];
  let count = 0;
  let i = 0;

  function DFS(list, sum) {
    console.log(list, sum);
    count++;
    if (count > 30) {
      console.log(">30");
      return;
    }
    if (sum === 0) {
      i++;
      return answer.push(list);
    } else if (sum < 0) {
      i++;
      return;
    } else {
      list.push(arr[i]);
      DFS(list, (sum -= arr[i]));
      list.pop();
    }
  }
  DFS([], m);
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
