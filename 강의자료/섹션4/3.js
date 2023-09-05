function solution(test) {
  const student = test[0].length;
  // 가능한 모든 (멘토, 멘티) 짝을 생성하고 조건을 확인
  // 멘토와 멘티가 같은 경우 건너뜀
  // 조건을 만족하지 않으면 짝을 만들지 않음
  let count = 0;
  for (let mentor = 1; mentor <= student; mentor++) {
    for (let mentee = 1; mentee <= student; mentee++) {
      // 모든 짝 생성하기
      if (mentor === mentee) continue;

      let isRate = true;
      for (let i = 0; i < test.length; i++) {
        let mentor_index = test[i].indexOf(mentor);
        let mentee_index = test[i].indexOf(mentee);

        if (mentor_index >= mentee_index) {
          isRate = false;
          break;
        }
      }

      if (isRate) {
        count++;
      }
    }
  }
  return count;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
