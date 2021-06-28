// 삽입정렬의 시간복잡도: O(N2)
// 최선의 경우: O(N)
// 삽입정렬은 두 번째 데이터부터 시작, 첫 번째 데이터는 그 자체로 정렬되어 있다고 판단
// 특징 - 정렬이 이루어진 원소는 항상 오름차순을 유지

// 데이터가 거의 정렬되어 있을 때 훨씬 효율적
// 퀵 정렬과 비교했을 때 보통은 삽입 정렬이 비효울적이나 정렬이 거의 되어 있는 상황에서는 퀵 정렬 보다 더 강력

const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else break;
    }
  }
  console.log(arr);
};

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
solution(arr);
