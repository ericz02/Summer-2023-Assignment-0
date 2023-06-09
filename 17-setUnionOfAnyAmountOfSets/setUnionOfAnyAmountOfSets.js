function setUnionOfAnyAmountOfSets(...args) {

  let u = new Set();

  for (let i = 0; i < args.length; i++) {

    for (const item of args[i]) {

      if (!u.has(item)) {
        u.add(item)
      }
      
    }

  }

  return u;
  
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;