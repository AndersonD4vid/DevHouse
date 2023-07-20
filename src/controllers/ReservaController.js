import Reserva from "../models/Reserva";

class ReservaController {
   async store(req, res) {
      const { user_id } = req.headers;
      const { house_id } = req.params;
      const { date } = req.body;

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