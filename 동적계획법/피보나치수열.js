/* 다이나믹 프로그래밍 */
// 메모리 공간을 약간 더 사용하여 연산 속도를 비약적으로 증가시킬 수 있는 방법

// 다음 조건을 만족할 때 DP사용 가능
// 1. 큰 문제를 작은 문제로 나눌 수 있다.
// 2. 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 동일하다.

// 메모이제이션 (Memoization)
// 다이나믹 프로그래밍을 구현하는 방법 중 한 종류로, 한 번 구한 결과를 메모리 공간에 메모해두고 같은 식을 다시 호출하면 메모리 결과를 그대로 가져오는 기법. 캐싱이라고도 함.

// 시간 복잡도: O(N)

function solution(n) {
  console.log(fibo1(n));
  console.log(fibo2(n));
}

function fibo1(n) {
  // 메모이제이션을 이용
  // 재귀적 -> 큰 문제를 해결하기 위해 작은 문제를 호출한다고 하여 탑다운(Top-Down)방식 이라고 함

  // 종료 조건
  if (n == 1 || n == 2) return 1;

  // 이미 계산한 적 있다면 그대로 반환
  if (dp1[n] != 0) return dp1[n];

  // 아직 계산하지 않은 문제라면 점화식에 따라 결과 반환
  dp1[n] = fibo1(n - 1) + fibo1(n - 2);
  return dp1[n];
}

function fibo2(n) {
  // 단순히 반복문을 이용하여 소스코드를 작성하는 경우 작은 문제부터 차근차근 답을 도출한다고 하여 보텀업(Bottom-Up)방식이라고 함

  dp2[1] = 1;
  dp2[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    dp2[i] = dp2[i - 1] + dp2[i - 2];
  }

  return dp2[n];
}
const dp1 = new Array(100).fill(0);
const dp2 = new Array(100).fill(0);
const n = 99;
solution(n);
