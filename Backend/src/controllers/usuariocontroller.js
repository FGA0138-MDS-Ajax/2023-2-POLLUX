/* eslint-disable import/named */
import bcrypt from 'bcrypt';
import {
  todos, criar, deletar, atualizar,
} from '../services/usuarioservices';
import { ObjectId } from 'mongodb';

const getAll = async (req, res) => {
  const users = await todos();

  const id = '_id';

  const newList = users.map((user) => (
    {
      email: user.email,
      _id: user[`${id}`],
    }
  ));

  return res.status(200).json(newList);
};

const createUser = async (req, res) => {
  console.log(req.body);

  const {
    email,
    senha,
    nome,
    curso,
    periodo
  } = req.body;

  console.log(`Criando novo usuário: email=${email}, senha=${senha}, nome=${nome}, curso=${curso}, periodo=${periodo}`);

  try {
    const { email: mail, _id } = await criar({
      email, senha, nome, curso, periodo,
    });
    return res.status(200).json({ mail, _id });
  } catch (error) {
    // Envia uma resposta de erro ao cliente
    return res.status(400).json({ error: error.message });
  }
};


const criarUsuario = async (email, senha, nome, curso, periodo) => {
  try {
    await connectDB();
    
    // Verificar se o e-mail já existe
    const usuarioExistente = await db.collection('usuarios').findOne({ email });
    if (usuarioExistente) {
      return 'E-mail já está em uso.';
    }
    
    // Criptografar a senha
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);
    
    // Criar novo usuário
    const usuario = {
      _id: new ObjectId(),
      email,
      senha: senhaHash,
      nome,
      curso,
      periodo,
      dataCriacao: new Date(),
    };
    
    // Inserir o usuário no banco de dados
    const result = await db.collection('usuarios').insertOne(usuario);

    // Enviar e-mail de autenticação
    

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await deletar({ id });
  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { email, senha } = req.body;
  const { id } = req.params;

  const user = await atualizar({ id, email, senha });
  res.status(200).json(user);
};

const login = async () => null;

export {
  getAll, login, createUser, deleteUser, updateUser, criarUsuario 
};
