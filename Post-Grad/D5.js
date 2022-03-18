var searchRange = function(nums, target) {
    let found = false;
    let answers = [];
    for (let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            found = true;
            answers.push(i);  
            }
        }
    
    if(answers.length == 1){
        answers.push(answers[0])
        return answers
    }
    if(answers.length > 1){
        let newAnswers = []
        newAnswers.push(answers[0])
        newAnswers.push(answers[answers.length -1])
        return newAnswers
    }
    if(found === false){
        return [-1, -1]
    }else return answers
    
};