// 선택정렬의 시간복잡도 : O(N2)
// 매번 가장 작은 것을 선택

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  console.log(arr);
};

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
solution(arr);
