function findAllHobbyists(hobby, hobbies) {
    return Object.keys(hobbies).filter(param => hobbies[param].includes(hobby));
  }
  
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));
  