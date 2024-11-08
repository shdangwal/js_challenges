function removeDuplicates(arr) {
  uniqueArr = [];
  arr.forEach((a) => {
    if (!uniqueArr.includes(a)) uniqueArr.push(a);
  });
  return uniqueArr;
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
