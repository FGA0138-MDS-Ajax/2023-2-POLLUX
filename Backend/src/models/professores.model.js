import connection from './mongoConnection';

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

export { getAllProfessors, findProfessorByName };

connectDB();
