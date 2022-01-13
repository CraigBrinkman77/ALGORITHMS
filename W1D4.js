

const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
//expected output: [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10, 11, 12];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];

function merge(arr1, arr2){
  let newArry = []
  let i = 0
  let j = 0
  while (i<arr1.length && j < arr2.length) {
      if (arr1[i]<arr2[j]){
        newArry.push(arr1[i]);
        i++;
      }
      else if(arr2[j]<arr1[i]){
        newArry.push(arr2[j]);
        j++;
      }
      else{
        newArry.push(arr1[i]);
        newArry.push(arr2[j]);
        j++;
        i++;
      }
  }
  
  if (i === arr1.length){
    newArry = newArry.concat(arr2.slice(j))
    }
  if (j === arr2.length){
      newArry = newArry.concat(arr1.slice(i))
    }
  return newArry
  // given 2 sorted array, combine them and return 1 sorted array. 
}
console.log(merge(sortedA4,sortedB4))



function mergeSort(arr){
  //given an unsorted array, return a sorted array using mergeSort
  //HINT: keep separate the array until they are 2 sorted arrays
  //HINT2: You may need to have a recursive function
  //HINT3: Make use of the Merge function you created
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];