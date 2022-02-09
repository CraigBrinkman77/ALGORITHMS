
function twoSum2(nums, targetSum) {
    let validPairs = [];
    for(let i = 0; i < nums.length; i++){
        let j=i+1;
        while(j<nums.length){
            while(nums[i]+nums[j]>targetSum){
                j++;
            }
            if(nums[i]+nums[j]===targetSum){
                // return [i, j];
                let pair = [i, j];
                validPairs.push(pair);
            }
            j++;
        }
    }
    return validPairs
}

// console.log(twoSum2(nums1,targetSum1))

const nums4 = [1, 2, 1, 2, 3, 1]; //[1,1,1,2,2,3]
const k4 = 2;
const expected4 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [3, 2, 0, 2, 0, 0];//[0,0,0,2,2,3]
const k5 = 1;
const expected5 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 2, 3, 2, 1, 3];//[1, 1, 2, 2, 3, 3]
const k6 = 3;
const expected6 = [1, 2, 3];

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

  //given an unsorted array and k
  // find the kth most frequent element
  
function kMostFrequent(nums, k) {
  let freqTable = {};
  let kMostFreq = [];
    for(const num of nums){
        if(freqTable.hasOwnProperty(num)){
            freqTable[num]++;
        }
        else{
            freqTable[num]=1;
        }
    }
    for(let i=0; i<k; i++){
      let maxValue;
      let maxKey;
      for(const [key, value] of Object.entries(freqTable)){
        if(maxValue === undefined){
          maxValue = value;
          maxKey = key;
        }
        if(value>maxValue){
          maxValue = value;
          maxKey = key;
        }
      }
      kMostFreq.push(parseInt(maxKey));
      delete freqTable[maxKey];
    }
    return kMostFreq;
}

console.log(kMostFrequent(nums4,k4));
console.log(kMostFrequent(nums5,k5));
console.log(kMostFrequent(nums6,k6));