/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

const unique = xs => [...new Set(xs)]; //using ES6 set

function isPangram(string) {
  // Check if all unique characters are >= the 26 letters of the alphabet
  return unique(string.toLowerCase()).join('').trim().replace(/\W+/g, '').length >= 26;
}

let string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)); //, true)
string = "This is not a pangram."
console.log(isPangram(string)); //, false)

