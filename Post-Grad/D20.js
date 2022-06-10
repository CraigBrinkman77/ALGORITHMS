var isValid = function(s) {
    let par = true
    let brack = true
    let square = true
    for (let i = 0; i <= s.length; i++){
        if (s[i] == "("){
            par = false;
        }
        if (s[i] == "["){
            square = false;
        }
        if (s[i] == "{"){
            brack = false;
        }
        if (s[i] == ")" && par == false){
            par = true
        }
        if (s[i] == "]" && square == false){
            square = true
        }
        if (s[i] == "}" && brack == false){
            brack = true
        }
        if (s[i] == "}" && brack == true){
            return false
        }
        if (s[i] == ")" && par == true){
            return false
        }
        if (s[i] == "]" && brack == true){
            return false
        }
    }
    
    if (par == true && brack == true && square == true){
        return true
    }else return false 
};