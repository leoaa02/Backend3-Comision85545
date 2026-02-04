import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

let users = [];

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: ID autogenerado
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *         firstName: Juan
 *         lastName: Pérez
 *         email: juan@test.com
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', (req, res) => {
  res.status(200).json({ status: 'success', payload: users });
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ status: 'error', message: 'Missing fields' });
  }

  const newUser = {
    _id: new mongoose.Types.ObjectId().toString(),
    firstName,
    lastName,
    email,
  };

  users.push(newUser);

  res.status(201).json({ status: 'success', payload: newUser });
});

export default router;
