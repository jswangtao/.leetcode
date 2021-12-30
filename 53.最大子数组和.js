/*
 * @Author: wangtao
 * @Date: 2021-12-28 23:26:19
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-12-29 14:10:13
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var ans = nums[0]
  var sum = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(sum, ans)
  }
  return ans
}
// @lc code=end
