import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  imgUrl: String
}, {
  timestamps: true,
  versionKey: false
});

export default model('product', productSchema);