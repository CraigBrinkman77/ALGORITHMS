/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 */
  //given 2 sorted array in different length, find the nums that are intersect and return the array 
  //****  nums that appeared in both array.

function orderedIntersection(sortedA, sortedB) {
  let intersect=[];
  for ( let i = 0; i< sortedA.length; i++){
    let x = 0;
    while(x<sortedB.length && sortedB[x]<=sortedA[i]){
      if (sortedB[x]===sortedA[i]){
        if (!intersect.includes(sortedB[x])){
          intersect.push(sortedB[x])
        }
      }
      x++;
    }
  }
  return intersect;
}

console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))

  //given 2 sorted array in different length, find the union of both set and return the array 
  //**** all nums that appeared in either array.

// function orderedMultisetUnion(sortedA, sortedB) {
//   let union = [];
//   if (sortedA.length < sortedB.length){
//     let short = sortedA;
//     let long = sortedB;
//   }
//   else{
//     let short = sortedB;
//     let long = sortedA;
//   }
//   for( let i = 0; i < short.length; i++){
//     let x = 0
//     if (short[i] === long[x]){
//       union.push(short[i])
//     }
    
//   }
  
// }
const numsA4 = [1, 2, 2, 2, 7]; 
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];

console.log(orderedMultisetUnion(numsA1, numsB1))
console.log(orderedMultisetUnion(numsA2, numsB2))
console.log(orderedMultisetUnion(numsA3, numsB3))