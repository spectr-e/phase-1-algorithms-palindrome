function isPalindrome(word) {
  // Write your algorithm here
  let wordLower = word.toLowerCase();
  let len = wordLower.length;
  let reversed = "";
  for (i = len - 1; i >= 0; i--) {
    reversed += wordLower[i];
  }
  if (reversed === wordLower) {
    return true;
  } else {
    return false;
  }
}
/* 
  Add your pseudocode here
  declare a function called isPalindrome receiving word arg
    initialize a new empty variable called reversedStr
    iterate over each letter in a reversed manner using a reducing for loop and push it to the previously initialized variable
    if reversedStr is equal to word
      return true  
*/

/*
  Add written explanation of your solution here
    declare a function that receives one arg (a string) called isPalindrome
    initialize a new empty variable that will hold the reversed string arg
    get the string's length and iterate over its letters reversed using a reducing for loop i.e
       (for i equal to string.length, while i greater or equal to 0, i--)
       for every reversed letter add it to the previously initialized variable
    compare the orginal string arg to the reversed string and return the appropriate boolean  

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
