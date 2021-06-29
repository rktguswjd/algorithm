// 계수정렬: 특정한 조건이 부합할 때만 사용할 수 있지만 매우 빠른 정렬 알고리즘
// 최악의 경우: O(N+K)
// 데이터의 크기 범위가 제한되어 중수 형태로 표현할 수 있을 때만 사용
// 일반적으로 가장 큰 데이터와 가장 작은 데이터의 차이가 1,000,000을 넘지 않을 때 효과적

// 계수정렬은 별도의 리스트를 선언하고 그 안에 정렬에 대한 정보를 담는다는 특징이 있음

// 계수정렬의 공간복잡도
// 예를 들어 데이터가 0과 999,999 2게만 존재한다고 가정했을 때 리스트의 크기를 100만 개가 되도록 선언해야함
// 따라서 항상 사용할 수 있는 정렬 알고리즘은 아니나 동일한 값을 가지는 데이터가 여러 개 등장할 때 적함

const solution = (arr) => {
  const max = Math.max.apply(null, arr);
  const list = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let idx = arr[i];
    list[idx]++;
  }
  let result = "";
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i]; j++) {
      result += i + " ";
    }
  }
  console.log(result);
};

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
solution(arr);
