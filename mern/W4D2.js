//------------ Grouping Categories ---------
const objects = [
    {
        name: "Receving red packets",
        category: "fun",
    },
    {
        name: "Turnip Cake",
        category: "yummy",
    },
    {
        name: "Having never-ending feasts",
        category: "Fun",
    },
    {
        name: "Everyone asks you for money",
        category: "Not fun",
    },
    {
        name: "Rice Cake",
        category: "yummy",
    },
    {
        name: "Ate too much unhealthy food",
        category: "Not fun",
    },
];


const expected = {
    fun: [
        {
            name: "Receving red packets",
        category: "fun",
        },
        {
        name: "Having never-ending feasts",
        category: "fun",
        },
    ],
    yummy: [
        {
        name: "Rice Cake",
        category: "yummy",
        },
        {
        name: "Turnip Cake",
        category: "yummy",
        },
    ],
    "Not fun": [
        {
        name: "Ate too much unhealthy food",
        category: "Not fun",
        },
        {
        name: "Everyone asks you for money",
        category: "Not fun",
        },
    ],
};


/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
  */
function groupObjects(items) {
 let results = {};
 for (const obj of items){
   if (results.hasOwnProperty((obj.category).toLowerCase())){
     results[(obj.category).toLowerCase()].push(obj)
   }
   else{
     results[(obj.category).toLowerCase()] = [obj]
   }
 }
return results
}

// console.log(groupObjects(objects))

  //------------ backspace string compare---------



const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
  // Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
  // Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
  // Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
  // Explanation: S becomes "c" while T becomes "b".

/* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
  */
function backSpaceStringCompare(S, T) {
    let sNew = [];
    let tNew = [];
    let i=0;
    while(i < S.length || i < T.length){
      if(i < S.length){
        if(S[i] === '#'){
          if(sNew.length > 0){
            sNew.pop()
          }
        } else {
          sNew.push(S[i]);
        }
      }
      if(i<T.length){
        if (T[i] === '#'){
          if(sNew.length > 0){
            sNew.pop()
          } else {
          tNew.push(T[i])
          }
        }
      }
      i++;
    }
    return sNew.join() === tNew.join()
}
console.log(backSpaceStringCompare(S1,T1))
console.log(backSpaceStringCompare(S2,T2))
console.log(backSpaceStringCompare(S3,T3))
console.log(backSpaceStringCompare(S4,T4))

function backSpaceStringCompare2(S, T) {
    let sNew = [];
    let tNew = [];
    for(let i=0; i<S.length; i++){
      if(S[i] === '#' && sNew.length > 0){
        sNew.pop()
      } else {
        sNew.push(S[i])
      }
    }
    for(let i=0; i<T.length; i++){
      if(T[i] === '#' && tNew.length > 0){
        tNew.pop()
      } else {
        tNew.push(T[i])
      }
    }
    return sNew.join() === tNew.join()
}

// console.log(backSpaceStringCompare2(S1,T1))
// console.log(backSpaceStringCompare2(S2,T2))
// console.log(backSpaceStringCompare2(S3,T3))
// console.log(backSpaceStringCompare2(S4,T4))