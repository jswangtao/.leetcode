/*
 * @Author: wangtao
 * @Date: 2022-03-15 14:52:43
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-03-23 10:06:56
 * @Description: file content
 */

var removeDuplicates = function (nums) {
  var current = 0;
  var next = 1;
  var len = nums.length;
  while (next < nums.length) {
    if (nums[current] === nums[next]) {
      nums.splice(next, 1);
    } else {
      current++;
      next++;
    }
  }
  return len - nums.length;
};
const test = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("🚀🚀🚀wimi======>>>1111", test);
