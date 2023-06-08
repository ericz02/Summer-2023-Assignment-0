function isPalindrome(word) {

  const reversed = word.split('').reverse().join('');
  return word === reversed;
  
}

// Do not edit this line;
module.exports = isPalindrome;