import { Router } from 'express';
import { generateMockUsers } from '../mocks/users.mock.js';
import { generateMockPets } from '../mocks/pets.mock.js';
import { UserModel } from '../models/user.model.js';
import { PetModel } from '../models/pet.model.js';

const router = Router();

router.get('/mockingpets', (req, res) => {
    res.json({
        status: 'success',
        payload: []
    });
});

router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json({ status: 'success', payload: users });
});

router.post('/generateData', async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;
        


        if (users > 0) {
            const mockUsers = generateMockUsers(users);
            await UserModel.insertMany(mockUsers);
        }

        if (pets > 0) {
            const mockPets = generateMockPets(pets);
            await PetModel.insertMany(mockPets);
        }

        res.json({
            status: 'success',
            message: 'Datos generados e insertados correctamente'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
