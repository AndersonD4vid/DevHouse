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

   // Filtrar todas as casas
   async index(req, res) {
      const { status } = req.query;

      const houses = await House.find({ status })

      return res.json(houses);
   }

   // Criar uma casa/anúncio
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

   // Atualizando uma casa/anúncio
   async update(req, res) {
      const { filename } = req.file;
      const { house_id } = req.params;
      const { descrioption, price, location, status } = req.body;
      const { user_id } = req.headers;

      // Atualizando informações da casa
      const houses = await House.updateOne({ _id: house_id }, {
         user: user_id,
         thumbnail: filename,
         descrioption,
         price,
         location,
         status,
      })

      return res.json(houses);
   }
}

export default new HouseController();