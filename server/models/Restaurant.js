import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String },
    menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }]
});

export default mongoose.model("Restaurant", RestaurantSchema);
