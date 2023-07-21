# Projeto backend DevHouse, reservas de casas

# Objetivo do projeto
- Usuário: Poderá fazer o cadastro na aplicação via e-mail e também realizar o
login via e-mail. O usuário deve reservar alguma casa desde que não seja suas própias
casa ou reservar casas com status indisponível. Poderá cancelar sua reserva há qualquer 
momento.

- Houses: Usuário logado poderá cadastrar uma nova casa, editar ou excluir suas
casas quando quiser. Casas cadastradas devem conter uma foto de capa, descrição,
localização, preço da diária e o status (Disponível ou indisponível).

## Tecnologias usadas no projeto
Node.Js, MongoDB.

[![My Skills](https://skillicons.dev/icons?i=nodejs,mongodb&perline=10)](https://skillicons.dev)


## Documentação da API
<a href="https://www.figma.com/proto/vEV0rVgzSQdCZaosJ38NOG/DOC-API-DEVHOUSE---BY%3A-Anderson-David?type=design&node-id=1-2&t=dpS9NyyqYMEjTogL-1&scaling=min-zoom&page-id=0%3A1&mode=design" target="_blank">Veja aqui</a>


## Iniciando o projeto
- yarn dev ou npm run dev


## Dependências
- express: É um framework para Node.js que fornece recursos mínimos para construção de servidores Web. 
- nodemon: Monitora as mudanças em nossos arquvios, e reinicia automaticamente o servidor Node.js quando necessário. Assim, você não precisa parar e iniciar o servidor manualmente a cada modificação.
- sucrase: é uma alternativa ao Babel que permite um desenvolvimento muito rápido. O sucrase assume que você está desenvolvendo em um navegador recente ou em uma versão recente do Node.js, acelerando a sua experiência em desenvolvimento.
- mongoose: É uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre o MongoDB e o ambiente de tempo de execução JavaScript Node.js, assim
facilitando a gente trabalhar com o banco de dados.
- multer: O Multer é um middleware que vai interceptar o upload e salvar o arquivo em uma pasta do disco.
- CORS: É um mecanismo que permite que recursos restritos em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence o recurso que será recuperado. Podemos ter controle e limitar requisições.
- yup: É um construtor de Schema JavaScript para validações de Schemas.

# Designer do projeto
<div>
  <img src="./Imagens do projeto/devHouse01.png" />
  <img src="./Imagens do projeto/devHouse02.png" />
</div>
