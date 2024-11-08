function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const sum = n * ((n + 1) / 2);
  let numSum = 0;
  for (let num of numbers) numSum += num;

  return sum - numSum;
}

module.exports = findMissingNumber;
