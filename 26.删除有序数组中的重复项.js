/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   if (!nums.length) return 0;
//   var current = 0;
//   var next = 1;
//   var len = nums.length;
//   while (next < nums.length) {
//     if (nums[current] === nums[next]) {
//       nums.splice(next, 1);
//     } else {
//       current++;
//       next++;
//     }
//   }
//   return nums.length;
// };
// TODO: 上面是我自己写的为啥又不行
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// @lc code=end
