import connection from './mongoConnection';
import { ObjectId } from 'mongodb';

let db;

const connectDB = async () => {
  if (!db) {
    db = await connection();
  }
};

const getAllProfessors = async () => db.collection('professores').find().toArray();

const findProfessorByName = async (nome) => {
  try {
    const professores = await db.collection('professores').find({ nome: new RegExp('^' + nome, 'i') }).toArray();
    return professores;
  } catch (error) {
    return [];
  }
};

const adicionarComentario = async (usuarioId, professorId, texto, nota) => {
  try {
    await connectDB();
    const comentario = {
      _id: new ObjectId(),
      usuarioId: new ObjectId(usuarioId),
      professorId: new ObjectId(professorId),
      texto: texto,
      nota : nota,
    };
    const result = await db.collection('avaliacoes').insertOne(comentario);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export { getAllProfessors, findProfessorByName, adicionarComentario };

connectDB();
