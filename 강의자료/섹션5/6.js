function solution(s) {
  let map = new Map();
  for (let x of s) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  let max_key = "";
  let max_value = 0;
  for (let [key, value] of map) {
    if (value > max_value) {
      max_key = key;
      max_value = value;
    }
  }
  return max_key;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
