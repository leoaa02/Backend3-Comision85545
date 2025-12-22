import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const passwordHash = bcrypt.hashSync('coder123', 10);

export const generateMockUsers = (quantity = 1) => {
    const users = [];

    for (let i = 0; i < quantity; i++) {
        users.push({
            _id: faker.database.mongodbObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: passwordHash,
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    return users;
};
