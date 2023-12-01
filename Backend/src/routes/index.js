import { Router } from 'express';

import { requestLogin } from '../models/usuario.model';
import {
  getAll, deleteUser, updateUser,
} from '../controllers/usuariocontroller';
import { getAllProfessors, findProfessorByName, adicionarComentario,
         findComentariosByProfessorId, getAllAvaliacoes, 
         adicionarComentarioAnonimo, calcularMediaNotas, updateProfessor,excluirComentario, 
         criarUsuario, findProfessorById, findComentariosByUsuarioId, inserirEmail, redefinirSenha} from '../models/professores.model';
import { findUserById } from '../models/usuario.model';
import {findMateriaById, getAllMaterias, findMateriaByEngenharia} from'../models/materia.model';
import { verificarEmail } from '../models/professores.model';
const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/usuario', getAll);
routes.post('/login', requestLogin);
//routes.post('/usuario', createUser);
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
  const { professorId, usuarioId, texto, nota, perguntas } = req.body;
  const result = await adicionarComentario(usuarioId, professorId, texto, nota, perguntas);
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

routes.get('/professor/:id/media', async (req, res) => {
  const { id } = req.params;
  const { media, porcentagem } = await calcularMediaNotas(id);
  if (media !== null) {
    res.status(200).json({ success: true, media, porcentagem });
  } else {
    res.status(500).json({ success: false, message: 'Erro ao calcular a média das notas' });
  }
});

routes.put('/professor/:id', async (req, res) => {
  const { id } = req.params;
  const result = await updateProfessor({ professorId: id });
  if (result) {
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(500).json({ success: false, message: 'Erro ao atualizar professor' });
  }
});

routes.delete('/comentarios/:id', async (req, res) => {
  const { id } = req.params;
  const result = await excluirComentario(id);
  if (result) {
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ success: false, message: 'Erro ao excluir comentário' });
  }
});

routes.post('/usuario', async (req, res) => {
  const { email, senha, nome, curso, periodo } = req.body;
  
  try {
    const result = await criarUsuario(email, senha, nome, curso, periodo);
    
    if (result === 'E-mail já está em uso.') {
      return res.status(400).json({ message: 'E-mail já está em uso.' });
    }
    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar usuário.', usuario: result.ops[0] });

  }
});

routes.get('/materias/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const materia = await findMateriaById(id);
    if (materia) {
      res.json(materia);
    } else {
      res.status(404).json({ error: 'Matéria não encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar matéria.' });
  }
});

routes.get('/materia/:engenharia', async (req, res) => {
  const { engenharia } = req.params;
  const materia = await findMateriaByEngenharia(engenharia);
  if (materia) {
    res.status(200).send({ success: true, data: materia });
  } else {
    res.status(404).send({ error: 'Materia não encontrada' });
  }
});

routes.get('/materias', async (req, res) => {
  try {
    const materias = await getAllMaterias();
    res.json(materias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar matérias.' });
  }
});

routes.get('/professores/:id', async (req, res) => {
  const { id } = req.params;
  const professor = await findProfessorById(id);
  if (professor) {
    res.status(200).json({ success: true, data: professor });
  } else {
    res.status(500).json({ success: false, message: 'Erro ao procurar professor' });
  }
});

routes.get('/comentarios/usuario/:id', async (req, res) => {
  const { id } = req.params;
  const comentarios = await findComentariosByUsuarioId(id);
  res.send(comentarios);
});

routes.get('/verificar-email', async (req, res) => {
  const { token } = req.query;

  try {
    const result = await verificarEmail(token);
    const successMessage = encodeURIComponent('E-mail verificado com sucesso');
    return res.redirect(`http://localhost:3001/sucess`);
  } catch (error) {
    console.error(error);
    const successMessage = encodeURIComponent('Erro ao verificar o e-mail');
    return res.redirect(`http://localhost:3001/sucess`);
  }
});

routes.post('/inserir-email', async (req, res) => {
  const { id, email } = req.body;

  try {
    const result = await inserirEmail(id, email);
    res.send('E-mail inserido com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao inserir o e-mail.');
  }
});

routes.post('/redefinir-senha', async (req, res) => {
  const { id, novaSenha } = req.body;

  try {
    const result = await redefinirSenha(id, novaSenha);
    res.send('Senha redefinida com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao redefinir a senha.');
  }
});

export default routes;