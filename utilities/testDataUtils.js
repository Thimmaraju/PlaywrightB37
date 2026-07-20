const { faker } = require('@faker-js/faker');

function generateLoginData(overrides = {}) {
  return {
    username: overrides.username ?? faker.internet.userName().toLowerCase(),
    password: overrides.password ?? faker.internet.password(12, false, /[A-Za-z0-9]/),
  };
}

function generateUniqueJobTitle(prefix = 'Auto Job Title') {
  const suffix = faker.string.alphanumeric(6);
  return `${prefix} ${suffix}`;
}

function generateJobTitleData(overrides = {}) {
  return {
    jobTitle: overrides.jobTitle ?? generateUniqueJobTitle(),
    jobDescription: overrides.jobDescription ?? faker.lorem.sentence({ min: 6, max: 12 }),
    notes: overrides.notes ?? faker.lorem.sentence({ min: 8, max: 16 }),
  };
}

function generateEmployeeData(overrides = {}) {
  return {
    firstName: overrides.firstName ?? faker.person.firstName(),
    middleName: overrides.middleName ?? faker.person.middleName(),
    lastName: overrides.lastName ?? faker.person.lastName(),
    employeeId: overrides.employeeId ?? faker.string.numeric(6),
    username: overrides.username ?? faker.internet.userName().toLowerCase(),
    email: overrides.email ?? faker.internet.email().toLowerCase(),
  };
}

function generateAlphanumericString(length = 10) {
  return faker.string.alphanumeric(length);
}

module.exports = {
  generateLoginData,
  generateUniqueJobTitle,
  generateJobTitleData,
  generateEmployeeData,
  generateAlphanumericString,
  generateRandomString: generateAlphanumericString,
};


