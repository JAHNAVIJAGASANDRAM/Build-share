import express from "express";
import {
  getBundles,
  getBundleById,
  addBundle,
  addItemToBundle,
} from "../controllers/bundleController.js";

const router = express.Router();

router.get("/", getBundles);
router.get("/:id", getBundleById);
router.post("/", addBundle);
router.post("/:id/items", addItemToBundle);

export default router;
