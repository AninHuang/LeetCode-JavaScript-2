/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Sanitize the input string - remove non alphanumeric
  // [] indicate a captcha group
  // \W grab all non alphanumeric characers, such as underscores, spaces, exclamation mark
  // _ underscores
  s = s.toLowerCase().replace(/[\W_]/g, "");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};

module.exports = isPalindrome;
