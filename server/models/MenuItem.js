import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
});

export default mongoose.model("MenuItem", MenuItemSchema);
