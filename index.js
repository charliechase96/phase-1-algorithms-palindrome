function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here

  * split the letters up
  * reverse letter order
  * rejoin letters
  * return compare result with original word
*/

/*
  Add written explanation of your solution here

  * use .split() to split letters of word up
  * use .reverse() to reverse letters of word order
  * use .join() to rejoin letters into "new" word
  * use === to compare result with original word; returns boolean
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
