/*
 * @Author: wangtao
 * @Date: 2021-12-28 16:40:13
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-12-28 20:56:01
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
 return nums.length !== new Set(nums).size
}
// @lc code=end
