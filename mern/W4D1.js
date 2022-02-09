// ---------- palindrome -----------

const str1 = "";
// expected1 = false;

const str2 = "a";
// expected2 = true;

const str3 = "ddaa"; //
// expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
// expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
// expected5 = true;
// Explanation: "daaad" "adada"

const str6 = "abc";
// expected6 = false;


// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.
function canStringBecomePalindrome(str) {
    if(str === ""){
      return false
    }if(str.length === 1){
      return true
    }
    const letters = {}
  for(let i =0; i<str.length; i++){
    if (letters.hasOwnProperty(str[i])){
      letters[str[i]] += 1
    }
    else{
      letters[str[i]] = 1
    }
  }
  let evens = 0
  let odds = 0
  for (const key in letters){
    if((letters[key] % 2) === 0){
      evens += 1
    }else{
      odds += 1
    }
  }
  if (odds > 1){
    return false
  }else{
    return true
  }

  console.log(letters)
}
// console.log(canStringBecomePalindrome(str1))
// console.log(canStringBecomePalindrome(str2))
// console.log(canStringBecomePalindrome(str3))
// console.log(canStringBecomePalindrome(str4))
// console.log(canStringBecomePalindrome(str5))
// console.log(canStringBecomePalindrome(str6))

// -----------DROP IT ---------------

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
  return elem > 5;
};
// expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 2;
};
// expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
// expected3 = [];

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

function dropIt(arr, callbackFunc) {
  for(let i=0; i < arr.length; i ++){
    if (callbackFunc(arr[i])){
      return arr.slice(i,arr.length)
    }
  }return []
}
console.log(dropIt(nums1, callback1))
console.log(dropIt(nums2, callback2))
console.log(dropIt(nums3, callback3))
