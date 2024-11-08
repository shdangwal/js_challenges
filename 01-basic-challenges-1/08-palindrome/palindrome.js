function isPalindrome(str) {
  formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}

module.exports = isPalindrome;
