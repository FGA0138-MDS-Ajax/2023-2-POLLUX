import { ObjectId } from 'mongodb';
import connection from './mongoConnection';

const getAll = async () => {
  const db = await connection();
  return db.collection('usuarios').find().toArray();
};

const newUser = async ({ email, senha }) => {
  const db = await connection();
  const user = await db.collection('usuarios').insertOne({ email, senha });
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

const login = async () => null;

export {
  getAll, login, newUser, userExists, deleta, update,
};
