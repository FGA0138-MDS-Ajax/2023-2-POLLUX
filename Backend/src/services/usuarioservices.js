/* eslint-disable import/named */

import {
  getAll, newUser, userExists, deleta, update,
} from '../models/usuario.model';

const todos = async () => {
  const users = await getAll();
  return users;
};

const criar = async ({
  email, senha, nome, curso, periodo,
}) => {
  const usuario = await userExists({ email });

  if (usuario) 
  return usuario;

  const user = await newUser({
    email,
    senha,
    nome,
    curso,
    periodo,
  });

  return user;
};

const deletar = async ({ id }) => {
  const usuario = await userExists({ id });

  if (!usuario) return { message: 'User not found' };
  const user = await deleta({ id });
  return user;
};

const atualizar = async ({ id, email, senha }) => {
  console.log('Chamando userExists');
  const usuario = await userExists({ id });
  console.log('Resultado de userExists:', usuario);

  if (!usuario) return { message: 'User not found' };

  console.log('Chamando update');
  const user = await update({ id, email, senha });
  console.log('Resultado de update:', user);

  return user;
};

const login = async () => null;

export {
  todos, login, criar, deletar, atualizar,
};
