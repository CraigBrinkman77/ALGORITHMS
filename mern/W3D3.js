const people = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
    {firstName: "Eddy", lastName: "Lee"},
    {firstName: "John", lastName: "Fawn"},
    {firstName: "Edward", lastName: "Kim"}
  ];
  
  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "John", lastName: "Fawn"},
  ];
  
  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  const searchFor3 = "Do";
  const searchBy3 = "lastName";
  const expected3 = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
  ];
  
  // Bonus
  const searchFor4 = "E";
  const searchBy4 = "lastName";
  const searchMethod4 = "includes"; 
  const expected4 = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
    {firstName: "Eddy", lastName: "Lee"},
  ];
  
  const searchFor5 = "o";
  const searchBy5 = "lastName";
  const searchMethod5 = "includes";
  
  
  function filterByKeyStartsWith(items, searchFor, searchBy) {
      let output = [];
      for (person in items) {
          if (items[person][searchBy].startsWith(searchFor)) {
              output.push(items[person])
          }
      }
      // console.log(output)
      return output;
  }
  
   // Filters the given items based on the search criteria using a startsWith
  
  
  
  // let expected = people.findIndex((person) => {return person.searchBy.startsWith(searchFor)}; searchFor)
  // return expected
  
  // console.log(filterByKeyStartsWith(people, searchFor1, searchBy1))
  // console.log(filterByKeyStartsWith(people, searchFor2, searchBy2))
  // console.log(filterByKeyStartsWith(people, searchFor3, searchBy3))
  // console.log(filterByKeyStartsWith(people, searchFor4, searchBy4))
  
  // toLowerCase()
  
  
  function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    let output = [];
      for (person of items) {
          if (person[searchBy][searchMethod](searchFor.toLowerCase())) {
              output.push(items[person])
          }
      }
      // console.log(output)
      return output;
   // Filters the given items based on the search criteria using different search method
   // search method : includes, startsWith, endsWith
  
  }
  
  // function filterByKey(items, searchFor, searchBy, searchMethod="startsWith") {
  //     let output = [];
  //     if (searchMethod == "startsWith") {
  //         for (person in items) {
  //             if (items[person][searchBy].startsWith(searchFor)) {
  //                 output.push(items[person])
  //             }
  //         }
  //     }
  //     if (searchMethod == "endsWith") {
  //         for (person in items) {
  //             if (items[person][searchBy].endsWith(searchFor)) {
  //                 output.push(items[person])
  //             }
  //         }
  //     }
  //     if (searchMethod == "includes") {
  //         for (person in items) {
  //             if (items[person][searchBy].indexOf(searchFor.toLowerCase()) != -1) {
  //                 output.push(items[person])
  //             }
  //         }
  //     }
  //     console.log(output)
  //     return output;
  // }
  
  // console.log(filterByKey(people, searchFor1, searchBy1))
  console.log(filterByKey(people, searchFor4, searchBy4, searchMethod4))
  console.log(filterByKey(people, searchFor5, searchBy5, searchMethod5))