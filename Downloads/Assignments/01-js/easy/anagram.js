/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
//   const lowerWord1 = str1.toLowerCase();
//   const lowerWord2 = str2.toLowerCase();
//   if (lowerWord1.length !== lowerWord2.length) {
//     return false;
//   }
  
//   const letterCount = {};
//   for (let letter of lowerWord1) {
//     letterCount[letter] = (letterCount[letter] || 0) + 1;
//   }
//   for (let letter of lowerWord2) {
//     if (!letterCount[letter]) {
//       return false;
//     }
//     letterCount[letter]--;
//   }
//   return true;
// }

// const lowercase1 = str1.toLowerCase();
// const lowercase2 = str2.toLowerCase();
// if(lowercase1.length !== lowercase2.length){
//   return false;
// }
// const charCount = {};
// for(let char of lowercase1){
//   charCount[char] = (charCount[char] || 0)+1;
// }
// for(let char of lowercase2){
//   if(!charCount[char]){
//     return false;
//   }
//   charCount[char]--;
// }
// return true;
// }

// const lowercase1 = str1.toLowerCase();
// const lowercase2 = str2.toLowerCase();
// if(lowercase1.length !== lowercase2.length){
//   return false;
// }
// const character = {};
// for(let char of lowercase1){
//   character[char] = (character[char] || 0)+1;
// }
// for(let char of lowercase2){
//   if(!character[char]){
//     return false;
//   }
//   character[char]--;
// }
// return true;
// }

// let lowercase1 = str1.toLowerCase();
// let lowercase2 = str2.toLowerCase();
// if(lowercase1.length !== lowercase2.length){
//   return false;
// }
// const character ={};
// for(let letter of lowercase1){
//   character[letter] = (character[letter] || 0 ) + 1;
// }
// for(let letter of lowercase2){
//   if(!character[letter]){
//     return false;
//   }
//   character[letter]--;
// }
// return true;
// }


// let char1 = str1.toLowerCase();
// let char2 = str2.toLowerCase();
// if(char1.length !== char2.length){
//   return false;
// }
// const character = {};
// for(let letter of char1){
//   character[letter] = (character[letter] || 0) + 1;
// }
// for(let letter of char2){
//   if(!character[letter]){
//     return false;
//   }
//   character.letter--;
// }
// return true;
// }

let lowerWord1 = str1.toLowerCase()
let lowerWord2 = str2.toLowerCase()
if(lowerWord1.length !== lowerWord2.length){
  return false;
}
const word = {};
for (let char of lowerWord1){
  word[char] = (word[char] || 0) +1;
}
for(let char of lowerWord2){
  if(!word[char]){
    return false;
  }
  word[char]--;
}
return true;
}


module.exports = isAnagram;
