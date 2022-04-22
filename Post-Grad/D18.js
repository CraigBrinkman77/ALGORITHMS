let output = []
for (let i = 0; i < nums.length; i++){
    let subset = [nums[i]] 
    for (let j = 0; j < nums.length; j++){
        if(j==i && j == nums.length - 1){
            output.push(subset)
        }
        if (j == i){
            continue
        }else{
            subset.push(nums[j])
        }
        if(j == nums.length-1){
            output.push(subset)
        }
    }
}
return output
};