function generateHashtag(str) {
  if (str.length > 140 || str === "") return false;
  return (
    "#" +
    str.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/\s/g, "")
  );
  return (
    "#" +
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  );
}

module.exports = generateHashtag;
