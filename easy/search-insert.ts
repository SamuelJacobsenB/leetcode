function searchInsert(nums: number[], target: number): number {
  let idx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      idx = i;
      break;
    }
  }
  return idx === -1 ? nums.length : idx;
}
