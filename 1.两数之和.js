/*
 * @Author: wangtao
 * @Date: 2020-02-08 12:55:14
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-01-13 21:34:07
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
// @lc code=end
