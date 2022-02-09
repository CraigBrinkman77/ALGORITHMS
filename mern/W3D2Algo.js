const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  
  const id1 = 3;
  const updateData1 = { redBeltStatus: true, isLateToday: true, };
  const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
  };
  
  const id2 = 1;
  const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };
  /* 
    Explanation: In this implementation
      randomKey was not added because it is not an existing key that can be updated
  */
  
  const id3 = 5;
  const updateData3 = {};
  const expected3 = null;
  
    //Finds the specified obj by id and updates it with the given key value pairs.  
  
  function findByIdAndUpdate(id, updatedVals, collection) {
    for(const obj of collection){
      if(obj.id===id){
        for(const key in updatedVals){
          if(obj.hasOwnProperty(key)){
            obj[key]=updatedVals[key];
          }
        }
        return obj
      }
    }
    return null
  }

  console.log(findByIdAndUpdate(id1, updateData1, students));
  console.log(findByIdAndUpdate(id2, updateData2, students));
  console.log(findByIdAndUpdate(id3, updateData3, students));