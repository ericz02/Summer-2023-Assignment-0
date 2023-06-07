function countOfAllNumbersSmallerThanTarget(nums, target) {

  // Use filter to create a new array with elements smaller than the target, then get the length of the filtered array
  const count = nums.filter(num => num < target).length;
  // Return the count of elements smaller than the target
  return count; 

}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;