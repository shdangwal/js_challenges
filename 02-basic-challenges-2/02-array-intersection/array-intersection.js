function arrayIntersection(arr1, arr2) {
  intersection = [];
  set1 = new Set(arr1);
  set2 = new Set(arr2);
  for (let a of set2) {
    if (set1.has(a)) intersection.push(a);
  }
  return intersection;
}

module.exports = arrayIntersection;
