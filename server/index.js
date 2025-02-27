import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js"; 
import restaurantRoutes from "./routes/restaurantRoutes.js"; // ✅ Correct import

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Failed:", err));

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes); // ✅ Correct usage

app.get("/", (req, res) => {
    res.send("Zomato Clone API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
