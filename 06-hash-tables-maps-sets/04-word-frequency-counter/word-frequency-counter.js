function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/);
  const wordFrequency = new Map();

  for (const word of words) {
    if (word === "") continue;

    wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
  }

  return wordFrequency;
}

module.exports = wordFrequencyCounter;
