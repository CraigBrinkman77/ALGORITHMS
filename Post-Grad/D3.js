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