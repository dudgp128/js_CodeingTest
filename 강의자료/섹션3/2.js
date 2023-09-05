function solution(s) {
  let lower_s = s.toLowerCase();
  let filtered = lower_s.replace(/[^a-z ]/g, "");
  let reversed = filtered.split("").reverse().join("");
  return filtered === reversed ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
