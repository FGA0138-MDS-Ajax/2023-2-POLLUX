import { Router } from 'express';

import { requestLogin } from '../models/usuario.model';
import {
  getAll, createUser, deleteUser, updateUser,
} from '../controllers/usuariocontroller';
import { getAllProfessors, findProfessorByName, adicionarComentario,
  findComentariosByProfessorId, getAllAvaliacoes, adicionarComentarioAnonimo} from '../models/professores.model';
import { findUserById } from '../models/usuario.model';
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

routes.get('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const user = await findUserById(id);
  res.send(user);
});


routes.post('/comentarios', async (req, res) => {
  const { professorId, usuarioId, texto, nota } = req.body;
  const result = await adicionarComentario(professorId, usuarioId, texto, nota);
  if (result) {
    res.status(200).send({ success: true, data: result });
  } else {
    res.status(500).send({ error: 'Erro ao adicionar comentário' });
  }
});

routes.post('/comentario/anonimo', async (req, res) => {
  const { professorId, texto, nota } = req.body;
  const result = await adicionarComentarioAnonimo(professorId, texto, nota);
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(500).json({ success: false, message: 'Erro ao adicionar comentário' });
  }
});


routes.get('/comentarios/professor/:id', async (req, res) => {
  const { id } = req.params;
  const comentarios = await findComentariosByProfessorId(id);
  res.send(comentarios);
});

routes.get('/avaliacoes', async (req, res) => {
  const avaliacoes = await getAllAvaliacoes();
  res.send(avaliacoes);
});



export default routes;