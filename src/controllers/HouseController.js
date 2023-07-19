// Métodos dentro de um controller: index, show, update, store e destroy
/*
   index: listagem de sessões
   show: listar uma única sessão
   store: criar uma nova sessão
   update: atualizar alguma sessão
   destroy: deletar uma sessão
*/


class HouseController {
   async store(req, res) {
      console.log(req.body);
      console.log(req.file);

      return res.json({ ok: true })
   }
}

export default new HouseController();