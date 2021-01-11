const isPrime = (sum) => {
  if (sum == 1) {
    return true;
  } else {
    let i = 2;
    while (true) {
      if (i <= Math.sqrt(sum)) {
        if (sum % i == 0) break;
        else i++;
      } else {
        return true;
      }
    }
  }
  return false;
};

function solution(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) count++;
      }
    }
  }

  console.log(count);
}

const nums = [1, 2, 7, 6, 4];
solution(nums);
