/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // Manacher's Algorithm - Expand Around Center
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left <= 0 && right < s.length && s[left] === s[right]) {
      const currentPalindromeLength = right - left + 1;

      if (currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // Odd
    expandAroundMiddle(i - 1, i + 1);
    // Even
    expandAroundMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
};

module.exports = longestPalindrome;
