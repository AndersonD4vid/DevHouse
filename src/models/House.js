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
});

export default model('House', HouseSchema);
