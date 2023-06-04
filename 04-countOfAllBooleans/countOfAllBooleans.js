function countOfAllBooleans(arr) {

  let count = 0; // Initialize a variable count to keep track of the number of boolean values

  // Iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is equal to true or false
    if (arr[i] === true || arr[i] === false) {
      count++; // If the current element is a boolean, increment the count by 1
    }
  }

  return count; // Return the total count of boolean values in the array
}

// Do not edit this line;
module.exports = countOfAllBooleans;