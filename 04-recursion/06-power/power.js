function power(base, exp) {
  if (exp === 1 || exp === 0) return base;

  return power(base, exp - 1) * base;
}

module.exports = power;
