const twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (true) {
    let sum = numbers[l] + numbers[r];
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [1 + l, 1 + r];
    }
  }
};
