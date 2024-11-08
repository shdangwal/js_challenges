function highestScoringWord(str) {
  let words = str.split(" ");
  let scores = words.map((word) => {
    return word
      .split("")
      .reduce((total, letter) => total + letter.charCodeAt(0) - 96, 0);
  });
  let highestScore = Math.max(...scores);
  let highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}

module.exports = highestScoringWord;
