import express from "express";
import {
  getBundles,
  getBundleById,
  addBundle,
  addItemToBundle,
  createBundle,
} from "../controllers/bundleController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Existing routes (keep them)
router.get("/", getBundles);
router.get("/:id", getBundleById);
router.post("/", addBundle);
router.post("/:id/items", addItemToBundle);

// New protected route for NGO bundle creation
router.post("/create", protect, createBundle);

export default router;
