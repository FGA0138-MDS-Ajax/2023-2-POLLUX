import { ObjectId } from 'mongodb';
import connection from './mongoConnection';
import bcrypt from 'bcrypt';

let db;

const connectDB = async () => {
  if (!db) {
    db = await connection();
  }
};

const getAll = async () => db.collection('usuarios').find().limit(50).toArray();

const newUser = async ({
  email, senha, nome, curso, periodo,
}) => {
  const user = await db.collection('usuarios').insertOne({
    email, senha, nome, curso, periodo,
  });
  const { insertedId: id } = user;
  return { email, _id: id };
};

const userExists = async ({ email, id }) => {
  let user = null;
  if (id) {
    user = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
  } else {
    user = await db.collection('usuarios').findOne({ email });
  }
  return user;
};

const deleta = async ({ id }) => {
  await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });
  return { id };
};

const update = async ({ id, email, senha }) => {
  await db.collection('usuarios').updateOne({ _id: new ObjectId(id) }, { $set: { email, senha } });
  return { id, email };
};

const login = async ({ email, senha }) => {
  const usuario = await db.collection('usuarios').findOne({ email });

 
  if (!usuario) {
    return null;
  }


  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return null;
  }

  return usuario;
};

const requestLogin = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await login({ email, senha });

  if (!usuario) return res.status(401).json({ message: 'Usuário ou senha inválidos' });

  return res.status(200).json({ user: usuario }); 
};


const findUserById = async (id) => {
  try {
    const user = await db.collection('usuarios').findOne({ _id: new ObjectId(id) }, 
   );
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export {
  getAll, login, newUser, userExists, deleta, update, requestLogin, findUserById
};

connectDB();
