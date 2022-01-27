const students = [
    {
      firstName: "Jane",
      lastName: "Doe",
      habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
      ],
    },
    {
      firstName: "John",
      lastName: "Smith",
      habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
      firstName: "Arya",
      lastName: "Stark",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
      firstName: "Jon",
      lastName: "Snow",
      habits: ["shows up early", "helps peers", "washes dishes"],
    },
  ];
  
  const badHabit1 = "doesn't wash dishes";
  const expected1 = ["Jane Doe", "Arya Stark"];
  
  const badHabit2 = "shows up late";
  const expected2 = ["John Smith", "Arya Stark"];
  
  const badHabit3 = "different naming for variables";
  const expected3 = [];
  
  function santasNaughtyList(persons, badHabit) {
    let expected =[]
    for (const person of persons ){
      for(i=0; i<person.habits.length; i ++){
        if (person.habits[i] === badHabit){
          expected.push(`${person.firstName} ${person.lastName}`)
        }
      }
    }
    return expected
  }
  
  // check the difference between for... in and for... of
  
  console.log(santasNaughtyList(students, badHabit1))
  console.log(santasNaughtyList(students, badHabit2))
  console.log(santasNaughtyList(students, badHabit3))
  //Finds a list of people whose habits contain the given bad habit.
  //return an array of the firstname and the lastname of them.
   
  function santasNaughtyListFunctional(persons, badHabit) {
    let expected =[]
    for (const person of persons ){
        if (person.habits.includes(badHabit)){
          expected.push(`${person.firstName} ${person.lastName}`)
        }
      }
    return expected
  }
  //functional means using filter/map those es6 language
  // like what we did in REACT
  
  console.log(santasNaughtyListFunctional(students, badHabit1))
  console.log(santasNaughtyListFunctional(students, badHabit2))
  console.log(santasNaughtyListFunctional(students, badHabit3))
  
  
  
  const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
  };
  
  const people = [
    {
      firstName: "Person",
      lastName: "One",
      isSocialDistancing: false,
      friends: [friend2, friend3],
    },
    {
      firstName: "Person",
      lastName: "Two",
      isSocialDistancing: true,
      friends: [friend2, friend1],
    },
    {
      firstName: "Person",
      lastName: "Three",
      isSocialDistancing: false,
      friends: [friend2, friend1],
    },
  ];
  
  const expected = ["Person One", "Person Three"];
  
  
  /**
   * Finds the people who are at risk of contracting Covid.
   * - Time O(?).
   * - Space O(?).
   * @param {Array<Person>} persons
   * @returns {Array<string>} An array of Person full names for those people who
   *    are at risk. A Person is at risk if:
   *    1. not practicing social distancing.
   *    2. have a friend who is not practicing social distancing whom hasCovid.
   */
  function coronaVirusAtRisk(persons) {
    const possiblyExposed = []
    for (const person of persons){
      if(!person.isSocialDistancing){
        for (i = 0; i <person.friends.length; i++){
          if (person.friends[i].hasCovid === true ){
            possiblyExposed.push(`${person.firstName} ${person.lastName}`)
            break
          }
        }
      }
    }
    return possiblyExposed
    //Finds the people who are at risk of contracting Covid.
    //A Person is at risk if:
    //1. not practicing social distancing.
   // 2. have a friend who is not practicing social
  }