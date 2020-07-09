/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const mapping = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (mapping[sorted] !== undefined) {
      mapping[sorted].push(str);
    } else {
      mapping[sorted] = [str];
    }
  }
  return Object.values(mapping);
};