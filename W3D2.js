*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

    // Given a criteria object and items
    // Finds the objects that match the given search criteria.
    //return any object that matches all the key value pairs in the search criteria object.

function findObjects(criteria, collection) {
  let matches = [];
  for(const obj of collection){
    let isFound = true;
    for(const key in criteria){
      if(isFound && obj.hasOwnProperty(key)){
        if(obj[key]!==criteria[key]){
          isFound=false;
        }
      }
      else{
        isFound=false;
      }
    }
    if(isFound){
      matches.push(obj)
    }
  }
  return matches
}

console.log(findObjects(searchCriteria1, items))
console.log(findObjects(searchCriteria2, items))

function findObjectsFunctional(criteria, collection) {
    
}