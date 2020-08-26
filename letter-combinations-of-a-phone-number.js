// 17. 电话号码的字母组合

/* 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]. */

// 1. DFS
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  let res = [];
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghj',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const dfs = (curStr, i) {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    const letters = map[digits[i]];
    for (let x of letters) {
      dfs(curStr + x, i + 1);
    }
  }

  dfs('', 0);
  return res;
}

// 2. BFS
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghj',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  let queue = [];
  queue.push('');
  for (let i = 0; i < digits.length; i++) {
    const levelSize = queue.length;
    for (let j = 0; j < levelSize; j++) {
      const curStr = queue.shift();
      const letters = map[digits[i]];
      for (let x of letters) {
        queue.push(curStr + x);
      }
    }
  }

  return queue;
}