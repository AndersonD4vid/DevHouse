import Reserva from "../models/Reserva";
import User from '../models/User';
import House from '../models/House';

class ReservaController {
   async store(req, res) {
      const { user_id } = req.headers;
      const { house_id } = req.params;
      const { date } = req.body;

      // verifica se existe uma casa no banco de dados
      const house = await House.findById(house_id);

      if (!house) {
         return res.status(400).json({ error: 'Essa casa não existe' });
      }

      if (house.status !== true) {
         return res.status(400).json({ error: 'Reserva indisponível' });
      }

      // não permitir que o usuário não faça uma reserva na própia casa
      const user = await User.findById(user_id);

      // _id é o user logado. Se o user logado for o mesmo que criou a casa não deixa logar
      if (String(user._id) === String(house.user)) {
         return res.status(401).json({ error: 'Você não pode reserva sua casa! Reserva indisponível' });
      }


      const reserva = await Reserva.create({
         user: user_id,
         house: house_id,
         date,
      });

      // Colocando as informações da casa e do usuário dentro da reserva
      await reserva.populate(["house", "user"]);

      return res.json(reserva);
   }
}

export default new ReservaController();