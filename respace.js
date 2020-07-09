/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
const respace = function(dictionary, sentence) {
  const len = sentence.length;
  if (len === 0) return 0;
  let dp = new Array(len).fill(0);
  for (let i = 1; i <= len; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 0; j < dictionary.length; j++) {
      let word = dictionary[j].length;
      if (dictionary[j] == sentence.substring(i - word, i) && word <= i) {
        dp[i] = Math.min(dp[i], dp[i - word]);
      }
    }
  }
  return dp[len];
}