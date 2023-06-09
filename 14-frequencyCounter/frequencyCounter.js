function frequencyCounter(word) {

  let freq = {}

  for (let i = 0; i < word.length; i++) {
    cur = word.charAt(i);

    if (freq[cur]) { 
      freq[cur]++
    } else {
      freq[cur] = 1 
    }
  }

  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;