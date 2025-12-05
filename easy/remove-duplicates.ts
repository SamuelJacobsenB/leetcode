function removeDuplicates(nums: number[]): number {
  const uniques = [...new Set(nums)];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = uniques[i];
  }
  return uniques.length;
}
