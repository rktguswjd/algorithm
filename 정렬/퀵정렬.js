// 퀵정렬의 시간복잡도: O(NlogN)
// 최악의 경우: O(N2)
// 데이터가 무작위로 입력되는 경우 퀵 정렬은 빠르게 동작한다
// 하지만 리스트의 가장 왼쪽 데이터를 피벗으로 삼을 때 "이미 데이터가 정렬되어 있는 경우"라면 매우 느리게 동작

// 호어 분할
// 리스트에서 첫 번재 데이터를 피벗으로 설정
// 피벗을 설정한 뒤 왼족에서부터 피벗보다 큰 데이터를
// 오른족에서부는 피벗보다 작은 데이터를 찾는다
// 그다음 큰 데이터와 작은 데이터의 위치를 서로 교환해준다

// 방식
// 1. left, right 각각 피벗을 기준으로 데이터를 선택 후 교환
// 2. left와 right의 값이 서로 엇갈린 경우 작은 데이터와 피벗의 위치를 서로 변경
// 3. 피벗의 left에는 피벗보다 작은 데이터들이 right에는 피벗보다 큰 데이터가 위치하도록 하는 작업을 분할 혹은 파티션이라고 한다
// 이 상태에서 left, right 리스트를 개별적으로 정렬한다.

const quickSort = (arr, start, end) => {
  // 종료 조건 : 원소가 1개인 경우
  if (start >= end) return;
  let pivot = start;
  let left = start + 1;
  let right = end;
  console.log(arr);

  while (left <= right) {
    // 왼쪽 : 피벗보다 큰 데이터를 찾을 때 까지
    while (left <= end && arr[left] <= arr[pivot]) {
      left += 1;
    }

    // 오른쪽 : 피벗보다 작은 데이터를 찾을 때 까지
    while (right > start && arr[right] > arr[pivot]) {
      right -= 1;
    }

    if (left > right) {
      // 만약 엇갈렸다면 작은 데이터를 피벗과 교체
      let temp = arr[right];
      arr[right] = arr[pivot];
      arr[pivot] = temp;
    } else {
      // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
    }

    // 분할 후 왼쪽 부분과 오른쪽 부분 각각 정렬수행
    quickSort(arr, start, right - 1);
    quickSort(arr, right + 1, end);
  }
};

const solution = (arr) => {
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
};

const arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];
solution(arr);
