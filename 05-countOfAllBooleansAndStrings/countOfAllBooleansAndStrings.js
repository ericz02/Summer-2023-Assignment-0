function countOfAllBooleansAndStrings(arr) {

  let count = 0;

  for (let  i = 0; i < arr.length; i++) {

    type = typeof arr[i]

    if (type === "string" || type === "boolean") {

      count++
      
    }
  }
  
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;