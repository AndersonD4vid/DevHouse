// Métodos dentro de um controller: index, show, update, store e destroy
/*
   index: listagem de sessões
   show: listar uma única sessão
   store: criar uma nova sessão
   update: atualizar alguma sessão
   destroy: deletar uma sessão
*/

import House from "../models/House";
import User from "../models/User";
import * as Yup from 'yup';

class HouseController {

   // Filtrar todas as casas
   async index(req, res) {
      const { status } = req.query;

      const houses = await House.find({ status })

      return res.json(houses);
   }

   // Criar uma casa/anúncio
   async store(req, res) {

      // Válidanções de schema
      const schema = Yup.object().shape({
         description: Yup.string().required(),
         price: Yup.number().required(),
         location: Yup.string().required(),
         status: Yup.boolean().required(),
      });


      const { filename } = req.file;
      const { description, price, location, status } = req.body;
      const { user_id } = req.headers;

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Por favor, preencher todos os campos!' })
      }

      // cadastrando uma casa
      const house = await House.create({
         user: user_id,
         thumbnail: filename,
         description,
         price,
         location,
         status,
      })

      return res.json(house);
   }

   // Atualizando uma casa/anúncio
   async update(req, res) {
      // Válidanções de schema
      const schema = Yup.object().shape({
         description: Yup.string().required(),
         price: Yup.number().required(),
         location: Yup.string().required(),
         status: Yup.boolean().required(),
      });

      const { filename } = req.file;
      const { house_id } = req.params;
      const { description, price, location, status } = req.body;
      const { user_id } = req.headers;

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Por favor, preencher todos os campos!' })
      }

      const user = await User.findById(user_id);
      const houses = await House.findById(house_id);

      // Verificando se o usuário logado  é o mesmo que cadastrou a casa
      if (String(user._id) !== String(houses.user)) {
         return res.status(401).json({ error: 'Não autorizado!' })
      }

      // Atualizando informações da casa
      await House.updateOne({ _id: house_id }, {
         user: user_id,
         thumbnail: filename,
         description,
         price,
         location,
         status,
      })

      return res.send();
   }

   // Excluindo uma casa/anúncio
   async destroy(req, res) {
      const { house_id } = req.body;
      const { user_id } = req.headers;

      const user = await User.findById(user_id);
      const houses = await House.findById(house_id);

      // Verificando se o usuário logado  é o mesmo que cadastrou a casa
      if (String(user._id) !== String(houses.user)) {
         return res.status(401).json({ error: 'Não autorizado!' });
      }

      // Excluindo
      await House.findByIdAndDelete({ _id: house_id });

      return res.json({ message: 'Excluida com sucesso!' });
   }
}

export default new HouseController();