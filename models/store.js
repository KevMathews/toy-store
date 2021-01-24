const { model, Schema } = require("mongoose");
const storeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Store = model("Store", storeSchema);

module.exports = Store;
