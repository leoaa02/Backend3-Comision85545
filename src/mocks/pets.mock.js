import { faker } from '@faker-js/faker';

export const generateMockPets = (quantity = 1) => {
    const pets = [];

    for (let i = 0; i < quantity; i++) {
        pets.push({
            name: faker.animal.cat(),
            type: faker.helpers.arrayElement(['dog', 'cat', 'bird']),
            age: faker.number.int({ min: 1, max: 15 })
        });
    }

    return pets;
};
