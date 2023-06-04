function titleCaseEdit(title) {
  
  // title is split into an array of words using split() method, each word is seperated by a space character
  const titleSplit = title.split(" ")

  // iterate over each word in `titleSplit` array 
  for (let i = 0; i < titleSplit.length; i++)

    // capitalize the first character of each word and concatenate it with the remaining characters
    titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1);

    // join the modified words back into a string with spaces in between
    return titleSplit.join(' ')
}

// Do not edit this line;
module.exports = titleCaseEdit;