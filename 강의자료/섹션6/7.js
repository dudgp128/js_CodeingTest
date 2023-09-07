function solution(need, plan) {
  let need_array = need.split("");
  let plan_array = plan.split("");
  for (let i = 0; i < need.length - 1; i++) {
    if (
      plan_array.indexOf(need_array[i]) > plan_array.indexOf(need_array[i + 1])
    ) {
      return "NO";
    }
  }
  return "YES";
}

let a = "CBA";
let b = "CBDAGE";
let c = " CQWERAB";

console.log(solution(a, b));
console.log(solution(a, c));
