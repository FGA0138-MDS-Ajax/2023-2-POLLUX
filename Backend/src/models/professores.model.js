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

const adicionarComentario = async (professorId, texto) => {
  try {
    await connectDB();
    const comentario = {
      _id: new ObjectId(),
      professorId: new ObjectId(professorId),
      texto: texto
    };
    const result = await db.collection('comentarios').insertOne(comentario);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export { getAllProfessors, findProfessorByName, adicionarComentario };

connectDB();
