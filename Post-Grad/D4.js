function appendAndDelete(s, t, k) {
    let i = 0;
    while (s[i] == t[i]){
        if(i == s.length){
            break
        }
        i++;
    }
    let totalTries = (s.length - i) + (t.length - i)
    if(totalTries == 0 && k % 2 == 0){
        return "Yes"
    }
    else if(k > s.length + t.length){
        return "Yes"
    }
    else if (totalTries == k ){
        return "Yes"
    }
    // else if ((totalTries - k) % 2 == 0){
    //     return "Yes"
    // }
    return "No"
} 