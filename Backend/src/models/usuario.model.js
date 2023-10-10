import { ObjectId } from 'mongodb';
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import connection from './mongoConnection';

const SECRET = 'paranguaricutirimiruarum';

const getAll = async () => {
  const db = await connection();
  return db.collection('usuarios').find().toArray();
};

const newUser = async ({
  email, senha, nome, curso, periodo,
}) => {
  const db = await connection();
  const user = await db.collection('usuarios').insertOne({
    email, senha, nome, curso, periodo,
  });
  const { isertedId: id } = user;
  return { email, _id: id };
};

const userExists = async ({ email, id }) => {
  const db = await connection();
  let user = null;
  if (id) {
    user = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
  } else {
    user = await db.collection('usuarios').findOne({ email });
  }
  return user;
};

const deleta = async ({ id }) => {
  const db = await connection();
  await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });
  return { id };
};

const update = async ({ id, email, senha }) => {
  const db = await connection();
  await db.collection('usuarios').updateOne({ _id: new ObjectId(id) }, { $set: { email, senha } });
  return { id, email };
};

const login = async ({ email, senha }) => {
  const db = await connection();
  const user = await db.collection('usuarios').findOne({ email, senha });
  return user;
};

const requestLogin = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await login({ email, senha });

  if (!usuario) return res.status(401).json({ message: 'User not found' });

  const { _id } = usuario;

  const newToken = jwt.sign(
    {
      userId: _id,
      email,
    },
    SECRET,
    {
      expiresIn: 1440,
    },
  );

  return res.status(201).json({ token: newToken });
};

export {
  getAll, login, newUser, userExists, deleta, update, requestLogin,
};
