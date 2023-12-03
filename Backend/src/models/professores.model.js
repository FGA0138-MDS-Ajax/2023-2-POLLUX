import connection from './mongoConnection';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

let db;
const segredo = 'chave';

const connectDB = async () => {
  if (!db) {
    db = await connection();
  }
};

const getAllProfessors = async () => db.collection('professores').find().toArray();

let intervalId; 

const getProfessorById = async (id) => {
  
  console.log(`Obtendo professor com ID ${id}`);
};

const startRequest = () => {
  console.log('Função startRequest foi chamada');
  intervalId = setInterval(async () => {
    await getProfessorById('655b952b2c0c351db1fb1eec');
  }, 30 * 60 * 1000); 
};

const stopRequest = () => {
  clearInterval(intervalId);
};

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

const adicionarComentario = async (usuarioId, professorId, texto, nota) => {
  try {
    await connectDB();

    const notaInt = parseInt(nota, 10);
    
    if (notaInt < 0 || notaInt > 5) {
      throw new Error('A nota deve ser entre 0 e 5');
    }
    
    const comentario = {
      _id: new ObjectId(),
      usuarioId: new ObjectId(usuarioId),
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
const enviarEmailAutenticacao = async (id, userEmail) => {
  const token = jwt.sign({ userId: id, verificarEmail: true}, segredo, { expiresIn: '1h' });

  const linkAutenticacao = `https://gamatrack.onrender.com/verificar-email?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port : 587,
    auth: {
      user: 'polluxmds@gmail.com', 
      pass: 'jehz uocr bsen wgtn'
    }
  });

  const mailOptions = {
    from: 'polluxmds@gmail.com',
    to: userEmail,
    subject: 'Link de Autenticação',
    text: `Clique no link a seguir para autenticar: ${linkAutenticacao}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso');
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao enviar o e-mail');
  }
};

const criarUsuario = async (email, senha, nome, curso, periodo, fotoUrl) => {
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
      emailVerificado: false,
      fotoUrl: fotoUrl 
    };

    // Enviar e-mail de autenticação
    await enviarEmailAutenticacao(usuario._id, email);

    // Inserir o usuário no banco de dados
    const result = await db.collection('usuarios').insertOne(usuario);
    

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Adicione isso ao seu arquivo professores.model.js
const verificarEmail = async (token) => {
  try {
    await connectDB();
    const decoded = jwt.verify(token, segredo);

    if (decoded.verificarEmail) {
      // Marcar o campo emailVerificado como true no banco de dados
      await db.collection('usuarios').updateOne(
        { _id: new ObjectId(decoded.userId) },
        { $set: { emailVerificado: true } }
      );

      return 'E-mail verificado com sucesso!';
    } else {
      return 'Token inválido para verificação de e-mail.';
    }
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao verificar o e-mail.');
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


const inserirEmail = async (id, email) => {
  try {

    await connectDB();

    console.log('Atualizando o e-mail do usuário no banco de dados...');
    const result = await db.collection('usuarios').updateOne(
      { _id: new ObjectId(id) },
      { $set: { email } }
    );
    
    await iniciarRedefinicaoSenha(id, email);

    return result;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
    return null;
  }
};

const iniciarRedefinicaoSenha = async (id, email) => {
  try {
    await connectDB();

   
    const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
    if (!usuario) {
      return 'Usuário não encontrado.';
    }


    const token = jwt.sign({ userId: id, redefinirSenha: true }, segredo, { expiresIn: '1h' });


    const linkRedefinicao = `http://localhost:3000/redefinir-senha?token=${token}`;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port : 587,
      auth: {
        user: 'polluxmds@gmail.com', 
        pass: 'jehz uocr bsen wgtn'
      }
    });

    const mailOptions = {
      from: 'polluxmds@gmail.com',
      to: email,
      subject: 'Redefinição de Senha',
      text: `Clique no link a seguir para redefinir sua senha: ${linkRedefinicao}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('E-mail de redefinição de senha enviado com sucesso');

    return 'E-mail de redefinição de senha enviado.';
  } catch (error) {
    console.error(error);
    return 'Erro ao iniciar a redefinição de senha.';
  }
};

const redefinirSenha = async (id, novaSenha) => {
  try {
    
    await connectDB();
   

    
    const usuarioExistente = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
    if (!usuarioExistente) {
      
      return 'Usuário não encontrado.';
    }

    
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(novaSenha, saltRounds);
    

    
    const result = await db.collection('usuarios').updateOne(
      { _id: new ObjectId(id) },
      { $set: { senha: senhaHash } }
    );
    console.log('Senha do usuário atualizada com sucesso.');

    return result;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
    return null;
  }
};


export { getAllProfessors, findProfessorByName, adicionarComentario, 
  findComentariosByProfessorId, getAllAvaliacoes, 

 adicionarComentarioAnonimo, calcularMediaNotas, updateProfessor, excluirComentario, 
  criarUsuario, autenticarUsuario, findProfessorById, findComentariosByUsuarioId, verificarEmail, inserirEmail, startRequest, stopRequest };


connectDB();
