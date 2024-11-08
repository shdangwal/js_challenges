function phoneNumberDirectory(phoneNumbers) {
  const phoneDirectory = new Map();

  for (const entry of phoneNumbers) {
    const [name, phoneNumber] = entry.split(":");
    phoneDirectory.set(name, phoneNumber);
  }

  return phoneDirectory;
}

module.exports = phoneNumberDirectory;
