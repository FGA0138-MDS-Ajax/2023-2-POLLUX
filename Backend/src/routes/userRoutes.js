import { Router } from 'express';
import {
  getAll, createUser, deleteUser, updateUser,
} from '../controllers/usuariocontroller';

const userRoutes = new Router();

userRoutes.get('/usuario', getAll);
userRoutes.post('/usuario', createUser);
userRoutes.delete('/usuario/:id', deleteUser);
userRoutes.put('/usuario/:id', updateUser);

export default userRoutes;
