import express from "express";
import Restaurant from "../models/Restaurant.js"; // Ensure this path is correct

const router = express.Router(); // Initialize router first

router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router; // Ensure default export
