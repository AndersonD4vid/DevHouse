import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';

class App {
   constructor() {
      this.server = express();

      // configuração com o banco de dados
      mongoose.connect('mongodb+srv://devhouse:devhouse@cluster0.gmenpoj.mongodb.net/devhouse?retryWrites=true&w=majority');

      this.middlewares();
      this.routes();
   }

   middlewares() {
      this.server.use(express.json());
   }

   routes() {
      this.server.use(routes);
   }
}

export default new App().server;