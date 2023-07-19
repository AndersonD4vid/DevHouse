import House from "../models/House";

class DashboardController {

   // Listando todas as casas no dashboard
   async show(req, res) {
      const { user_id } = req.headers;

      // Buscando todas as casas do user que criou
      const houses = await House.find({ user: user_id })

      return res.json(houses);
   }
}

export default new DashboardController();