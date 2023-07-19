// Métodos dentro de um controller: index, show, update, store e destroy
/*
   index: listagem de sessões
   show: listar uma única sessão
   store: criar uma nova sessão
   update: atualizar alguma sessão
   destroy: deletar uma sessão
*/

import House from "../models/House";

class HouseController {
   async store(req, res) {
      const { filename } = req.file;
      const { descrioption, price, location, status } = req.body;
      const { user_id } = req.headers;

      // cadastrando uma casa
      const house = await House.create({
         user: user_id,
         thumbnail: filename,
         descrioption,
         price,
         location,
         status,
      })

      return res.json(house);
   }
}

export default new HouseController();