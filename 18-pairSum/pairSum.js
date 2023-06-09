function pairSum(nums, target) {

  if (nums.length <= 1) {
    throw new Error("length needs to be <= 2");
  }

  const visited = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    if (visited[complement] !== undefined && visited[complement] !== i) {
      return true;
    }

    visited[currentNum] = i;
  }

  return false;
  
}

// Do not edit this line;
module.exports = pairSum;