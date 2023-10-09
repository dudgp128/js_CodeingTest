function solution(s) {
  let big_text = s.toUpperCase();
  let array = big_text.split(" ");
  const regexp = /[A-Z]/g;

  let result = [];
  for (let e of array) {
    let text = e.match(regexp);
    result.push(text);
  }
  return result === result.reverse();
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
