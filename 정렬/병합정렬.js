const arr = [4, 2, 3, 1, 5];
const tempArr = new Array(arr.length);

const merge = (arr, left, right) => {
  let mid = Math.floor((left + right) / 2);
  let L = left;
  let R = mid + 1;
  let K = left;

  while (L <= mid && R <= right) {
    tempArr[K++] = arr[L] <= arr[R] ? arr[L++] : arr[R++];
  }

  if (L > mid) {
    for (let i = R; i <= right; i++) {
      tempArr[K++] = arr[i];
    }
  } else {
    for (let i = L; i <= mid; i++) {
      tempArr[K++] = arr[i];
    }
  }

  for (let i = left; i <= right; i++) {
    arr[i] = tempArr[i];
  }
};

const mergeSort = (arr, left, right) => {
  if (left == right) return;
  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, right);
};

const main = () => {
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
};

main();
