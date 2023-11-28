import connection from './mongoConnection';
import { ObjectId } from 'mongodb';

let db;

const connectDB = async () => {
  if (!db) {
    db = await connection();
  }
};

const findMateriaById = async (id) => {
  try {
    await connectDB();
    const materia = await db.collection('materias').findOne({ _id: new ObjectId(id) });
    return materia;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { findMateriaById };

connectDB();