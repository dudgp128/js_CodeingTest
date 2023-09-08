function solution(s) {
  let map = new Map();
  for (let x of s) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }
  let max = 0;
  let max_key = "";
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      max_key = key;
    }
  }
  return max_key;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
