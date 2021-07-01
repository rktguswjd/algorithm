const { chownSync } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 이진 탐색(이분 탐색)
// 이진 탐색은 배열 내부의 데이터가 정렬되어 있어야만 사용할 수 있는 알고리즘
// 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 특징

// 시작점, 끝점, 중간점
// 찾으려는 데이터와 중건점 위치에 있는 데이터를 반복적으로 비교

// 이진 탐색의 시간 복잡도: O(logN)

// 10 7
// 1 3 5 7 9 11 13 15 17 19

const solution = (input) => {
  const temp = input.shift().split(" ");
  const n = +temp[0];
  const target = +temp[1];

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);

  let result1 = binarySearch1(arr, target, 0, n - 1);
  let result2 = binarySearch2(arr, target, 0, n - 1);

  if (result1 == -1) console.log("재귀: 원소가 존재하지 않습니다.");
  else console.log("재귀: ", result1 + 1);

  if (result2 == -1) console.log("반복문: 원소가 존재하지 않습니다.");
  else console.log("반복문: ", result2 + 1);
};

const binarySearch1 = (arr, target, start, end) => {
  /* 재귀 */

  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);

  // 찾은 경우 중간점 인덱스 반환
  if (arr[mid] == target) return mid;
  // 중간점 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
  else if (arr[mid] > target) return binarySearch1(arr, target, start, mid - 1);
  // 중간점 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
  else return binarySearch1(arr, target, mid + 1, end);
};

const binarySearch2 = (arr, target, start, end) => {
  /* 반복문 */
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
