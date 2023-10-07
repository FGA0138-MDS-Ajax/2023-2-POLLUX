import { Router } from 'express';
import userRoutes from './userRoutes';
const routes = new Router();

const users = [{
  id: 1, 
  name: 'Lucas', 
  email: 'lucas.123@gmail.com', 
  password: '123456'
}]

// Rota de autenticação
routes.post('/login', (req, res) => {
  const {email, password } = req.body; 
  const user = users.find(user => user.email === email && user.password === password); 

  //caso as credenciais estejam corretas
  if(user) {
    return res.status(200).json(user);
  }

  //caso estejam erradas, impede o acesso
  return res.status(401).json({ message: 'dados inválidos'}); 
});

// Rota de cadastro de usuário
routes.post('/cadastro', (req, res) => {
  // 
});

// Rotas de recursos de usuário
routes.use(userRoutes);

export default routes;

