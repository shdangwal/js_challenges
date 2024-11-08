function validatePassword(password) {
  const isLegnthValid = password.length >= 8;
  const hasUpperCase = /[A-Z]+/.test(password);
  const hasLowerCase = /[a-z]+/.test(password);
  const hasDigit = /[0-9]+/.test(password);

  return isLegnthValid && hasUpperCase && hasLowerCase && hasDigit;
}

module.exports = validatePassword;
