const twoSum = function (nums, target) {
  let numberIndex = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let currEl = nums[i];
    let complement = target - nums[i];
    if (numberIndex.has(complement)) {
      result[0] = numberIndex.get(complement);
      result[1] = i;
      return result;
    }
    numberIndex.set(currEl, i);
  }
  return result;
};
