import { model, Schema } from "mongoose";

const HouseSchema = new Schema({
   thumbnail: String,
   description: String,
   price: Number,
   location: String,
   status: Boolean,

   // Referenciando o ID do usuário que cadastrou a casa
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
}, {
   toJSON: {
      virtuals: true, // informa para colocar a variável virtual junto com a requisição quando fazer
   }
});

/*
   Quando a gente criar uma nova casa, não vai ser registrado ao banco de dados, mas quando
   fizer uma busca ele vai ta lá, mas não vai ta.
 */
HouseSchema.virtual('thumbnail_url').get(function () {
   return `http://localhost:3333/files/${this.thumbnail}`;
});

export default model('House', HouseSchema);
