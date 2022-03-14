
let nums = [2,7,11,15,13,22,10] 
//target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var twoSum = function (nums, target) {
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i,j]
            }
        }
    }
};
console.log(twoSum(nums, 9));  //returns [ 0, 1 ]
console.log(twoSum(nums, 18)); // returns [ 1, 2 ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let nums3 = [-1,0,1,2,-1,-4];

var threeSum = function(nums) {
    let answers =[];
    for(let i= 0; i<nums.length-2; i++){
        for(let j = i+1; j < nums.length- 1;j++){
            for(let k = j+1; k < nums.length; k++){
                console.log(i,j,k)
                if(nums[i] + nums[j] + nums[k] ==0){
                    answers.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return answers
};

console.log(threeSum(nums3));

Wiji to Everyone (11:07 AM)
var threeSum = function(nums) {
    let answers =[];
    nums = nums.sort()
    for(let i= 0; i<nums.length-2; i++){
        for(let j = i+1; j < nums.length- 1;j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    let answer = [nums[i],nums[j],nums[k]].sort();
                    let duplicate = false
                    for(let l=0; l < answers.length; l++){
                        if(answers[l][0] == answer[0] && answers[l][1] == answer[1] && answers[l][2] == answer[2]){
                           duplicate = true
                        }
                    } 
                    if( duplicate == false){
                       answers.push(answer);
                    }
                }
            }
        }
    }
    return answers
};
[10:35 PM]
var threeSum = function(nums) {
    let answers =[];
    nums = nums.sort()
    let checker = []
    for(let i= 0; i<nums.length-2; i++){
        for(let j = i+1; j < nums.length- 1