/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl"; 
const expected1 = true;

const strA2 = "Hey"; 
const strB2 = "hello"; 
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello"; 
const strB3 = "helo"; 
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello"; 
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

//Given two strings,
//return true if the first string can be built from the letters in the 2nd string
function canBuildS1FromS2(s1, s2) {}



// 1.0.1  
// 1.2.0
const test1V1 = "0.1";
const test1V2 = "1.1";
// expected1 = -1;   V1<V2

const test2V1 = "1.0.1"; // 1.0.1
const test2V2 = "1";     // 1.0.0.0.0.0.0.0.0.0
// expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
// expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
//  expected4 = 1;

const test5V1 = "1.01";  // 1.01.   01 = 1
const test5V2 = "1.001"; // 1.001  001 = 1
// expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”



// Determines which version number is greater or if they are equal.
// return 1 if v1 greater, -1 if v1 smaller, 0 if equal.
function compareVersionNumbers(v1, v2) {
  const v1Split = v1.split(".");
  const v2Split = v2.split(".");

  for (let i = 0; i < v1Split.length || i < v2Split.length; i++) {
    // || 0 means if whatever is to the left of || is falsy, use 0 as the value instead
    const v1RevisionNum = parseInt(v1Split[i]) || 0;
    const v2RevisionNum = parseInt(v2Split[i]) || 0;
  

    if (v1RevisionNum > v2RevisionNum) {
      return 1;
    } else if (v1RevisionNum < v2RevisionNum) {
      return -1;
    }
  }
  return 0;
}



/* 
Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/