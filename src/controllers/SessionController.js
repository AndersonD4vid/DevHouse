// Métodos dentro de um controller: index, show, update, store e destroy
/*
   index: listagem de sessões
   show: listar uma única sessão
   store: criar uma nova sessão
   update: atualizar alguma sessão
   destroy: deletar uma sessão
*/

import User from "../models/User";

class SessionController {
   async store(req, res) {
      const { email } = req.body;

      let user = await User.findOne({ email });

      // verificando se um usuário já existe, se não exister vai criar um usuário novo
      if (!user) {
         user = await User.create({ email });
      }

      // se existir ele vai apenas retornar
      return res.json(user)
   }
}

export default new SessionController();