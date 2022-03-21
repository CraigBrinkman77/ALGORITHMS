let nums = [1, 2, 3, 1]
// output : 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length == 1) {
        return 0;
    }
    if (nums.length == 2) {
        if (nums[0] < nums[1]) {
            return 1;
        } else return 0;
    }
    let n = nums.length - 1;
    for (let i = 0; i <= n; i++) {
        if (i == 0 && nums[i] > nums[i + 1]) {
            return i;
        }
        else if (i == n && nums[i] > nums[i - 1]) {
            return i;
        }
        else if (i != 0 && i != n) {
            if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
                return i;
            }
        }
    }
};
console.log(findPeakElement(nums));