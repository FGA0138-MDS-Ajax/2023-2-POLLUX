import { Router } from 'express';
import { requestLogin } from '../models/usuario.model';
import {
  getAll, createUser, deleteUser, updateUser,
} from '../controllers/usuariocontroller';
import { getAllProfessors, findProfessorByName } from '../models/professores.model';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/usuario', getAll);
routes.post('/login', requestLogin);
routes.post('/usuario', createUser);
routes.delete('/usuario/:id', deleteUser);
routes.put('/usuario/:id', updateUser);

routes.get('/professores', async (req, res) => {
  const professores = await getAllProfessors();
  res.send(professores);
});

routes.get('/professores/search', async (req, res) => {
  const { nome } = req.query;
  const professores = await findProfessorByName(nome);
  res.send(professores);
});

export default routes;
