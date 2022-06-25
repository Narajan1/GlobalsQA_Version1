const faker = require("@faker-js/faker").faker;

const name = faker.name.firstName();
const surename = faker.name.lastName();
const pCode = faker.address.zipCode();

module.exports = {
    firstName: name,
    lastName: surename,
    postCode: pCode
};

