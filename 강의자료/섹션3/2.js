function solution(s) {
  let big_text = s.toUpperCase();
  let filtered = big_text.replace(/[^A-Z]/g, "");
  let reveresed = filtered.split("").reverse().join("");
  return filtered === reveresed ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
