# Declaração de Escopo do Produto

## **1.0 Problema / Sistema de Software**
Definição da equipe.

### **Definição da equipe**
- Nicollas Gabriel – Responsável por desenvolver funcionalidades e implementação de rotas Backend.
- Samuel Ribeiro – Responsável pelo desenvolvimento funcionalidades e correções de bugs no Backend.
- Rodrigo Braz – Responsável pelo desenvolvimento funcionalidades e correções de bugs no Backend.
- Isaque Colem – Responsável pelo desenvolvimento e testes Frontend.
- Eric Rabelo – Responsável pelo desenvolvimento e funcionalidades no Frontend.

### **Resumo do problema**
Nosso software representa uma aplicação web que oferece uma abordagem prática e em tempo real para avaliar e pesquisar os professores da FGA. O propósito central desta ferramenta é criar um ambiente seguro e anônimo onde estudantes, tanto novos quanto veteranos, possam compartilhar suas opiniões sobre os professores e as disciplinas ministradas na Faculdade do Gama (FGA).

### **Sistema de Software**
Este sistema permite que os alunos avaliem os professores e as disciplinas de forma anônima, proporcionando feedback valioso para a melhoria contínua do ensino. Além disso, o “GamaTrack” também oferece aos professores a oportunidade de entender melhor as necessidades e expectativas dos alunos, permitindo-lhes ajustar seus métodos de ensino de acordo.

Os principais objetivos do “GamaTrack” são:

- Fornecer uma plataforma fácil de usar para a avaliação dos professores e disciplinas.

- Garantir o anonimato dos alunos para promover uma avaliação honesta e sem medo de represálias.

- Utilizar os feedbacks coletados para melhorar a qualidade da educação na FGA.


Conforme o documento de visão do produto e do projeto, o “Avalia FGA” é mais do que apenas um sistema de avaliação - é uma ferramenta para promover a excelência no ensino e aprendizagem na Faculdade do Gama.

### **Resumo de Tecnologias Usadas**
- Node.js: Utilizado para o backend por ser uma plataforma de servidor eficiente e escalável que permite a execução de JavaScript no servidor. Ele é ideal para aplicações em tempo real com uso intensivo de dados.

- MongoDB: Escolhido como banco de dados por ser um banco de dados NoSQL, o que significa que ele pode lidar com grandes quantidades de dados e é flexível em termos de estruturas de dados, o que é ideal para projetos que podem evoluir ao longo do tempo.

- React: Utilizado para o frontend por ser uma biblioteca JavaScript para construir interfaces de usuário. Ele permite a criação de componentes reutilizáveis, o que pode aumentar a eficiência do desenvolvimento.

- Microsoft Teams: Utilizado para reuniões de grupo por ser uma plataforma que oferece chamadas de vídeo, compartilhamento de tela e fácil colaboração em documentos.

- Trello: Escolhido para a organização de tarefas por ser uma ferramenta de gerenciamento de projetos que permite ao grupo acompanhar o progresso das tarefas e colaborar mais efetivamente.

- Figma: Utilizado para criar protótipos das telas do site por ser uma ferramenta de design intuitiva que permite a colaboração em tempo real.

### **Resumo da Metodologia de Desenvolvimento Usada:**
A metodologia Scrum foi utilizada no desenvolvimento do nosso projeto. O Scrum é uma estrutura de gerenciamento de projetos que é amplamente utilizada no desenvolvimento de software. Ela é caracterizada por ciclos de trabalho curtos e iterativos, conhecidos como Sprints, que foi dada uma semana para ser concluída.

Aqui está um breve resumo de como o Scrum foi aplicado:

- **Planejamento do Sprint:** No início de cada Sprint, a equipe se reúne para identificar as tarefas a serem realizadas. Essas tarefas são então adicionadas ao Backlog do Sprint.

- **Sprints:** Durante o Sprint, a equipe trabalha para completar as tarefas selecionadas. Cada membro da equipe possui um papel específico: ficou dividido assim membros no backend e membros no frontend e teve tarefas que todos os membros tinham que participar.

- **Reuniões diárias de Scrum:** A equipe se reúne brevemente todos os dias para discutir o progresso e planejar o trabalho do dia.

- **Revisão do Sprint:** No final do Sprint, a equipe se reúne para revisar o trabalho realizado e discutir o que funcionou bem e o que pode ser melhorado.

O uso da metodologia Scrum permitiu à nossa equipe responder rapidamente às mudanças, melhorar continuamente nossos processos e entregar resultados de alta qualidade de forma consistente.

## 2.0 Backlog do Produto

### Temas

| ID Temas | Tema                                  |
| --------  | ------------------------------------- |
| T01      | Acesso à aplicação                    |
| T02      | Busca de Professores e Listagem de Matérias |
| T03      | Avaliação de Professores               |

### Épicos

| Tema   | ID Épico | Épico                               |
| ------ | -------- | ----------------------------------- |
| T01    | E01   | Autenticação de Usuário              |
| T01    | E02   | Registro de Usuário                  |
| T02    | E03   | Busca de Professores                  |
| T02    | E04   | Busca de Matérias por Curso          |
| T02    | E05   | Seleção de Professores por Matéria   |
| T03    | E06   | Visualização de Dados de Professor Específico |
| T03    | E07   | Avaliação de Professor Específico     |


### Historias do Usuário 

| Tema   | Épico | US    | Histórias de Usuário                                            |
| ------ | ----- | ----- | -------------------------------------------------------------- |
| T01    | E02 | US-01 | Eu como usuário quero ser capaz de criar uma conta             |
| T01    | E02 | US-02 | Eu como usuário quero ser capaz de acessar minha conta        |
| T01    | E01 | US-03 | Eu como usuário quero ser capaz de redefinir minha senha      |
| T01    | E06 | US-04 | Eu como usuário que poder ter acesso a um header para facilitar a navegação |
| T02    | E03 | US-05 | Eu como usuário quero poder buscar por um professor específico |
| T02    | E04 | US-06 | Eu como usuário quero poder filtrar as matérias para cada engenharia |
| T02    | E05 | US-07 | Eu como usuário quero poder ver todos os professores ativos de uma matéria específica |
| T02    | E06 | US-08 | Eu como usuário quero poder ver os dados de um professor em uma página específica |
| T03    | E07 | US-09 | Eu como usuário quero poder ver a nota de um professor        |
| T02    | E06 | US-10 | Eu como usuário quero poder ver quais matérias determinado professor leciona |
| T03    | E07 | US-11 | Eu como usuário quero poder avaliar um professor com um comentário |
| T03    | E07 | US-12 | Eu como usuário quero poder avaliar um professor com uma nota |
| T03    | E07 | US-13 | Eu como usuário quero poder avaliar um professor através de tags fixas como: "boa didática", "difícil aprendizado" e etc. |
| T01    | E02 | US-14 | Eu como usuário quero poder ver todos os comentários feitos por outros alunos sobre um determinado professor |
| T01    | E02 | US-15 | Eu como usuário quero poder saber o curso e o semestre de quem realizou uma avaliação |
| T01    | E02 | US-16 | Eu como usuário quero poder ver todos os meus comentários na aplicação em uma página específica |
| T03    | E07 | US-17 | Eu como usuário quero poder avaliar um professor de forma anônima |
| T01    | E02 | US-18 | Eu como usuário quero poder ter uma foto de perfil             |
| T01    | E02 | US-19 | Eu como usuário quero poder excluir minha conta               |
| T01    | E01 | US-20 | Eu como usuário quero poder sair da aplicação      

### 2.1 Perfis

| Nome do Perfil | Características do Perfil                                | Permissões de Acesso                                      |
| -------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| Administrador  | Responsável por manter os perfis de acesso da aplicação, criar novos usuários, alterar usuários já existentes, ou excluir usuários (Manter usuários). | Descrever sucintamente as permissões de acesso.           |
| Usuário Comum  | Pode acessar as principais funcionalidades e utilizar livremente o software. | Acesso às informações e funcionalidades principais.       |

### *2.2 Cenários Funcionais**

| Numeração do Cenário | Nome do Cenário                               | Sprints   |
| -------------------- | -------------------------------------------- | --------- |
| 1                    | Registro de Usuário                         | Sprint 1  |
| 2                    | Login de Usuário                            | Sprint 2  |
| 3                    | Pesquisa por Professor                      | Sprint 3  |
| 4                    | Visualização dos Dados de um Professor Específico | Sprint 3  |
| 5                    | Listagem de Matérias por Engenharia          | Sprint 4  |
| 6                    | Visualização dos Professores de uma Matéria Específica | Sprint 4  |
| 7                    | Avaliação de um Professor Específico         | Sprint 5  |
| 8                    | Visualização de Avaliações de outros Alunos  | Sprint 6  |

### **2.3 Backlog do Produto**

| Numeração da Sprint | Nome do Requisito (Cenário / Requisito) | Tipo de Requisito | Priorização do Requisito (Funcional / Não Funcional) | Must, Should, Could | Descrição Sucinta do Requisito | User Stories (U.S.) Associadas |
| ------------------- | ------------------------------------- | ----------------- | ------------------------------------------------------ | ------------------ | ------------------------------ | ----------------------------- |
| 1                   | Sprint 5 - Registro de Usuário        | Funcional         | Must                                                 |                    | Os usuários devem ser capazes de criar uma conta no sistema. | US-01 / US-03               |
| 2                   | Sprint 5 - Login de Usuário            | Funcional         | Must                                                 |                    | Os usuários devem ser capazes de fazer login no sistema. | US-02                        |
| 3                   | Sprint 6 - Busca de Professores        | Funcional         | Must                                                 |                    | Os usuários devem ser capazes de procurar por professores. | US-05 / US-07               |
| 7                   | Sprint 7 - Avaliação de Professores     | Funcional         | Must                                                 |                    | Os usuários devem ser capazes de avaliar os professores. | US-08 / US-11 / US-12 / US-13 / US-17 |
| 8                   | Sprint 6 - Visualização de Outras Avaliações | Funcional   | Must                                                 |                    | Os usuários devem ser capazes de ver avaliações feitas por outros usuários. | US-08 / US-09 / US-14 / US-15 |
| 5                   | Sprint 8 - Busca de Matérias por Curso | Funcional         | Should                                               |                    | Os usuários devem ser capazes de buscar todas as matérias de uma engenharia específica. | US-06 |
| 4                   | Sprint 3 - Visualização dos Dados de um Professor Específico | Funcional | Must | | Os usuários devem ser capazes de visualizar dados de um professor específico. | US-07 / US-08 / US-09 / US-10 |
| 6                   | Sprint 4 - Visualização dos Professores de uma Matéria Específica | Funcional | Should | | Os usuários devem ser capazes de visualizar todos os comentários feitos por outros alunos sobre um professor específico. | US-06 / US-07 |

### **2.4 Sprints Previstas**

| Sprint  | Descrição                                      | Objetivos                                | User Stories         |
| ------- | --------------------------------------------- | ---------------------------------------- | -------------------- |
| Sprint 1 | Tema 1 - Acesso a aplicação                   | Implementação da funcionalidade de registro e login do usuário. | US-01, US-02, US-03, US-16, US-18 |
|         |                                                |                                                  |                        |
| Sprint 2 | Tema 1 - Acesso a aplicação                   | Desenvolvimento do login e cadastro de usuários. | US-18, US-19, US-20 |
|         |                                                |                                                  |                        |
| Sprint 3 | Tema 2 - Busca de Professores                | Implementar a funcionalidade de busca de professores. | US-05 |
|         |                                                |                                                  |                        |
| Sprint 4 | Tema 2 - Listagem de Matérias por Engenharia | Implementar a funcionalidade de listagem de todas as matérias das engenharias da FGA. | US-06 |
|         | Tema 3 - Avaliação de Professores            | Implementação de avaliar e comentar anonimamente nos perfis dos professores. | US-07, US-09, US-10, US-11, US-12, US-13, US-14, US-17 |
|         |                                                |                                                  |                        |
| Sprint 5 |                                               | Implementar funcionalidades adicionais. |                        |
|         |                                               |                                                  |                        |
| Sprint 6 | Teste e funcionalidade do projeto            | Fazer todos os testes do software e reparo do código. |                        |


## **3.0 Definição de Ready / Done**

Os critérios de "Ready" indicam as condições que uma tarefa deve atender antes de ser considerada pronta para os testes. Isso inclui ter uma descrição clara da tarefa, critérios de aceitação bem definidos, a resolução de todas as dependências, garantir que a equipe de teste tenha os recursos necessários e a devida priorização no backlog.

"Done" representa as condições que uma tarefa deve cumprir para ser considerada concluída. Isso envolve atender a todos os critérios de aceitação estabelecidos, realizar testes e validações adequados, atualizar a documentação relevante para refletir as mudanças introduzidas e passar por uma revisão e aprovação pela equipe ou pelo cliente.


## **4.0 US – User Stories**

### US – User Stories

| Perfil de Acesso | Técnicas de Elicitação | US ID | Histórias de Usuário | Critérios de Ready/Done |
|-----------------|------------------------|-------|----------------------|------------------------|
| Usuário         | Levantamento de requisitos | US-01 | Eu como usuário quero ser capaz de criar uma conta | Input para entrada de cada dado de registro do usuário. Botão para confirmar cadastro. |
| Usuário         | Levantamento de requisitos | US-02 | Eu como usuário quero ser capaz de acessar minha conta | Input para entrada de cada dado de autenticação do usuário. Botão para confirmar acesso. |
| Usuário         | Levantamento de requisitos | US-03 | Eu como usuário quero ser capaz de redefinir minha senha | Link para redefinição de senha. |
| Usuário         | Levantamento de requisitos | US-04 | Eu como usuário que poder ter acesso a um header para facilitar a navegação | Header com link para Home, Matérias e Sobre. Além do logo da aplicação e da foto do usuário.|
| Usuário         | Levantamento de requisitos | US-05 | Eu como usuário quero poder buscar por um professor específico | Header com link para Home, Matérias e Sobre. Além do logo da aplicação e da foto do usuário. Barra de pesquisa para inserção do nome do professor a ser buscado. Seção com retorno de professores pesquisados no formato de card. |
| Usuário         | Levantamento de requisitos | US-06 | Eu como usuário quero poder filtrar as matérias pra cada engenharia | Cards para cada engenharia. Carrossel de matérias separados por nível. Seção com todos os professores ativos da matéria selecionada no formato de card. Página específica com os dados e avaliações dos professores. Gráfico com as notas de todas as avaliações que aquele professor já recebeu. |
| Usuário         | Levantamento de requisitos | US-07 | Eu como usuário quero poder ver todos os professores ativos de uma matéria específica | Seção com todos os professores ativos da matéria selecionada no formato de card |
| Usuário         | Levantamento de requisitos | US-08 | Eu como usuário quero poder ver os dados de um professor em uma página específica | Página específica com os dados e avaliações dosprofessores.|
| Usuário         | Levantamento de requisitos | US-09 | Eu como usuário quero poder ver a nota de um professor | Página específica com os dados e avaliações dos professores.|
| Usuário         | Levantamento de requisitos | US-10 | Eu como usuário quero poder ver quais matérias determinado professor leciona | Tags coloridas das matérias ativas que o professor leciona. |
| Usuário         | Levantamento de requisitos | US-11 | Eu como usuário quero poder avaliar um professor com um comentário | Input de texto para que o usuário insira o comentário no campo de avaliação. |
| Usuário         | Levantamento de requisitos | US-12 | Eu como usuário quero poder avaliar um professor com uma nota | Checkbox com o número de estrelas para compor a nota daquele professor. |
| Usuário         | Levantamento de requisitos | US-13 | Eu como usuário quero poder avaliar um professor através de tags fixas como: “boa didática”, “difícil aprendizado” e etc | Tags com características pré-estabelecidas para a avaliação do professor na área de avaliação. |
| Usuário         | Levantamento de requisitos | US-14 | Eu como usuário quero poder ver todos os comentários feitos por outros alunos sobre um determinado professor | Seção de comentários. |
| Usuário         | Levantamento de requisitos | US-15 | Eu como usuário quero poder saber o curso e o semestre de quem realizou uma avaliação | Seção com período e curso do usuário em seu comentário. |
| Usuário         | Levantamento de requisitos | US-16 | Eu como usuário quero poder ver todos meus comentários na aplicação em uma página específica | Dropdown com opção de “ver todos os meus comentários”. |
| Usuário         | Levantamento de requisitos | US-17 | Eu como usuário quero poder avaliar um professor de forma anônima | Checkbox para avaliação anônima. |
| Usuário         | Levantamento de requisitos | US-18 | Eu como usuário quero poder ter uma foto de perfil | Dropdown com opção para troca de foto de perfil. Foto de perfil do usuário no header. |
| Usuário         | Levantamento de requisitos | US-19 | Eu como usuário quero poder excluir minha conta | Dropdown com opção de excluir a conta. |
| Usuário         | Levantamento de requisitos | US-20 | Eu como usuário quero poder sair da aplicação | Dropdown com opção de sair da aplicação. |


## **5.0 Casos de Uso**

## **6.0 MVP**

O Produto Mínimo Viável (MVP) para o nosso projeto é uma versão simplificada do sistema que inclui as funcionalidades essenciais para atender às necessidades básicas dos usuários. Para o nosso sistema, definimos o MVP da seguinte forma:

### **Registro e Login de Usuário:** 
Os usuários devem ser capazes de criar uma conta e fazer login no sistema. Esta é uma funcionalidade fundamental que permite aos usuários acessar o sistema e suas funcionalidades.

### **Avaliação de Professores:** 
Os usuários devem ser capazes de avaliar os professores e, se quiserem, poderão fazer isso anonimamente também. Esta é a principal funcionalidade do nosso sistema e é essencial para coletar feedback sobre os professores.

### **Busca por professores:** 
Os usuários devem ser capazes de procurar por professores usando um campo de busca na plataforma. Eles podem digitar o nome do professor e o sistema deve retornar uma lista de professores que correspondam à consulta de busca. Isso permite que os usuários encontrem facilmente os professores que desejam avaliar ou cujas avaliações desejam ver.

### **Visualização de Avaliações:** 
Os usuários devem ser capazes de visualizar as avaliações feitas por outros usuários. Isso permite que os usuários obtenham informações dos métodos de avaliações dos professores, bem como a didática do professor.

### **Recuperação de Senha:** 
Os usuários devem ser capazes de recuperar suas senhas caso as esqueçam. Isso melhora a experiência do usuário ao usar o sistema.

Escolhemos essas funcionalidades para o MVP porque acreditamos que elas são as mais importantes para atender às necessidades dos nossos usuários. Além disso, essas funcionalidades formam a base do nosso sistema, sobre a qual podemos construir funcionalidades adicionais em futuras iterações.
