import express from "express";
import Bundle from "../models/bundleModel.js";

const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    const bundles = [
      {
        name: "School Kit",
        description: "Backpack, notebooks, pencils for students",
        itemsRequired: [
          { item: "Backpack", quantity: 1 },
          { item: "Notebook", quantity: 3 },
          { item: "Pencil", quantity: 5 },
        ],
      },
      {
        name: "Winter Pack",
        description: "Blankets and woolens for underprivileged families",
        itemsRequired: [
          { item: "Blanket", quantity: 2 },
          { item: "Sweater", quantity: 1 },
        ],
      },
      {
        name: "Hygiene Kit",
        description: "Soap, sanitizer, and toothbrush set",
        itemsRequired: [
          { item: "Soap", quantity: 2 },
          { item: "Toothbrush", quantity: 1 },
          { item: "Sanitizer", quantity: 1 },
        ],
      },
    ];

    await Bundle.deleteMany(); // Clears old data
    await Bundle.insertMany(bundles);
    res.send("✅ Bundles seeded successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("❌ Error seeding bundles");
  }
});

export default router;
