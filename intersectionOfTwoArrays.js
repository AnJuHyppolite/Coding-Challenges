const intersection = function (nums1, nums2) {
  let sharedElements = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !sharedElements.includes(nums1[i])) {
      sharedElements.push(nums1[i]);
    }
  }
  return sharedElements;
};
