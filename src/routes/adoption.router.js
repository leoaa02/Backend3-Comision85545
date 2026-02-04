import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

// Mock simple en memoria (suficiente para el TP)
let adoptions = [];

/**
 * GET /api/adoptions
 * Obtener todas las adopciones
 */
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    payload: adoptions,
  });
});

/**
 * GET /api/adoptions/:id
 * Obtener una adopción por ID
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid ID' });
  }

  const adoption = adoptions.find(a => a._id === id);

  if (!adoption) {
    return res.status(404).json({ status: 'error', message: 'Adoption not found' });
  }

  res.status(200).json({
    status: 'success',
    payload: adoption,
  });
});

/**
 * POST /api/adoptions
 * Crear una adopción
 */
router.post('/', (req, res) => {
  const { petName, userName } = req.body;

  if (!petName || !userName) {
    return res.status(400).json({
      status: 'error',
      message: 'petName and userName are required',
    });
  }

  const newAdoption = {
    _id: new mongoose.Types.ObjectId().toString(),
    petName,
    userName,
    adoptedAt: new Date(),
  };

  adoptions.push(newAdoption);

  res.status(201).json({
    status: 'success',
    payload: newAdoption,
  });
});

/**
 * PUT /api/adoptions/:id
 * Actualizar una adopción
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { petName, userName } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid ID' });
  }

  const index = adoptions.findIndex(a => a._id === id);

  if (index === -1) {
    return res.status(404).json({ status: 'error', message: 'Adoption not found' });
  }

  adoptions[index] = {
    ...adoptions[index],
    petName: petName ?? adoptions[index].petName,
    userName: userName ?? adoptions[index].userName,
  };

  res.status(200).json({
    status: 'success',
    payload: adoptions[index],
  });
});

/**
 * DELETE /api/adoptions/:id
 * Eliminar una adopción
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: 'error', message: 'Invalid ID' });
  }

  const index = adoptions.findIndex(a => a._id === id);

  if (index === -1) {
    return res.status(404).json({ status: 'error', message: 'Adoption not found' });
  }

  adoptions.splice(index, 1);

  res.status(200).json({
    status: 'success',
    message: 'Adoption deleted',
  });
});

export default router;
