function titleCase(str) {
  words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  //   return str.replace(/\b\w/g, (match) => match.toUpperCase());
  return words.join(" ");
}

module.exports = titleCase;
