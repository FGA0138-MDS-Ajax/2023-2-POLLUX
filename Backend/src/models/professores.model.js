import connection from './mongoConnection';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

let db;

const connectDB = async () => {
  if (!db) {
    db = await connection();
  }
};

const getAllProfessors = async () => db.collection('professores').find().toArray();

const getAllAvaliacoes = async () => db.collection('avaliacoes').find().toArray();

const findProfessorByName = async (nome) => {
  try {
    const professores = await db.collection('professores').find({ nome: new RegExp('^' + nome, 'i') }).toArray();
    return professores;
  } catch (error) {
    return [];
  }
};

const findComentariosByProfessorId = async (professorId) => {
  try {
    await connectDB();
    const comentarios = await db.collection('avaliacoes').find({ professorId: new ObjectId(professorId) }).toArray();  
    return comentarios;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const findComentariosByUsuarioId = async (usuarioId) => {
  try {
    await connectDB();
    const comentarios = await db.collection('avaliacoes').find({ usuarioId: new ObjectId(usuarioId) }).toArray();  
    return comentarios;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const adicionarComentario = async (usuarioId, professorId, texto, nota, perguntas) => {
  try {
    await connectDB();

    const notaInt = parseInt(nota, 10);
    
    if (notaInt < 0 || notaInt > 5) {
      throw new Error('A nota deve ser entre 0 e 5');
    }

    // Validação das notas das perguntas
    perguntas.forEach(pergunta => {
      pergunta.nota = parseInt(pergunta.nota, 10); // Convertendo a nota para um inteiro
      if (pergunta.nota < 0 || pergunta.nota > 5) {
        throw new Error('A nota da pergunta deve ser entre 0 e 5');
      }
    });
    
    const comentario = {
      _id: new ObjectId(),
      usuarioId: new ObjectId(usuarioId),
      professorId: new ObjectId(professorId),
      texto: texto,
      nota : notaInt,
      perguntas: perguntas, // Adicionando as perguntas ao comentário
      data: new Date(),
    };

    const result = await db.collection('avaliacoes').insertOne(comentario);
    
    
    const avaliacoes = await db.collection('avaliacoes').find({ professorId: new ObjectId(professorId) }).toArray();
    const soma = avaliacoes.reduce((acc, avaliacao) => acc + avaliacao.nota, 0);
    const media = soma / avaliacoes.length;
    
   
    const porcentagem = media * 20; 

    const updateResult = await updateProfessor({ professorId });

    return { result, media, porcentagem, updateResult };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const perguntas = [
  { texto: 'Pergunta 1', nota: 5 },
  { texto: 'Pergunta 2', nota: 4 },
  { texto: 'Pergunta 3', nota: 3 },
  { texto: 'Pergunta 4', nota: 2 },
  { texto: 'Pergunta 5', nota: 1 },
];

const adicionarComentarioAnonimo = async (professorId, texto, nota) => {
  try {
    await connectDB();
   
    const notaInt = parseInt(nota, 10);
    
    if (notaInt < 0 || notaInt > 5) {
      throw new Error('A nota deve ser entre 0 e 5');
    }
    
    const comentario = {
      _id: new ObjectId(),
      professorId: new ObjectId(professorId),
      texto: texto,
      nota : notaInt,
      data: new Date(),
    };
    const result = await db.collection('avaliacoes').insertOne(comentario);
    
    const avaliacoes = await db.collection('avaliacoes').find({ professorId: new ObjectId(professorId) }).toArray();
    const soma = avaliacoes.reduce((acc, avaliacao) => acc + avaliacao.nota, 0);
    const media = soma / avaliacoes.length;
    
    const porcentagem = Math.round(media * 20); 

   
    const updateResult = await updateProfessor({ professorId });

    return { result, media, porcentagem, updateResult };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const excluirComentario = async (_Id) => {
  try {
    await connectDB();
    
    const result = await db.collection('avaliacoes').deleteOne({ _id: new ObjectId(_Id) });
    
    if (result.deletedCount === 0) {
      throw new Error('Comentário não encontrado.');
    }
    
    return { success: true };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const criarUsuario = async (email, senha, nome, curso, periodo) => {
  try {
    await connectDB();
    
    
    const usuarioExistente = await db.collection('usuarios').findOne({ email });
    if (usuarioExistente) {
      return 'E-mail já está em uso.';
    }
    
    
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);
    
    
    const usuario = {
      _id: new ObjectId(),
      email,
      senha: senhaHash,
      nome,
      curso,
      periodo,
      dataCriacao: new Date(),
    };
    
    
    const result = await db.collection('usuarios').insertOne(usuario);
    
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const autenticarUsuario = async (email, senha) => {
  try {
    await connectDB();
    
    
    const usuario = await db.collection('usuarios').findOne({ email });
    if (!usuario) {
      return 'Usuário não encontrado.';
    }
    
    
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return 'Senha inválida.';
    }
    
   
    return usuario;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const calcularMediaNotas = async (professorId) => {
  try {

    await connectDB();
    const avaliacoes = await db.collection('avaliacoes').find({ professorId: new ObjectId(professorId) }).toArray();
    const soma = avaliacoes.reduce((acc, avaliacao) => acc + avaliacao.nota, 0);
    const media = soma / avaliacoes.length;
    const porcentagem = Math.round(media * 20);
    
    return { media, porcentagem };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateProfessor = async ({ professorId }) => {
  try {
    const result = await calcularMediaNotas(professorId);

    if (!result) {
      throw new Error('Error calculating media and porcentagem.');
    }

    const { porcentagem } = result;

    await db.collection('professores').updateOne(
      { _id: new ObjectId(professorId) },
      { $set: { nota: porcentagem } }
    );
    
    return { nota: porcentagem };
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

const findProfessorById = async (id) => {
  try {
    await connectDB();
    const professor = await db.collection('professores').findOne({ _id: new ObjectId(id) });
    return professor;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export { getAllProfessors, findProfessorByName, adicionarComentario, 
  findComentariosByProfessorId, getAllAvaliacoes, 
  adicionarComentarioAnonimo, calcularMediaNotas, updateProfessor, excluirComentario, criarUsuario, autenticarUsuario, findProfessorById, findComentariosByUsuarioId};

connectDB();
