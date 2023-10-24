import connection from './mongoConnection';

let db;

const connectDB = async () => {
  if (!db) {
    db = await connection();
  }
};

// Função para buscar todos os professores
const getAllProfessors = async () => db.collection('professores').find().limit(50).toArray();

// Função para procurar professores pelo nome
const findProfessorByName = async (nome) => {
  try {
    const professores = await db.collection('professores').find({ nomes: new RegExp(nome, 'i') }).toArray();
    return professores;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getAllProfessors, findProfessorByName };

connectDB();
