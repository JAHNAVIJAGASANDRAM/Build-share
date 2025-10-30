import mongoose from "mongoose";

const bundleSchema = new mongoose.Schema({
  name: String,
  description: String,
  itemsRequired: [
    {
      item: String,
      quantity: Number,
    },
  ],
  itemsReceived: [
    {
      item: String,
      quantity: Number,
      donorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
  status: { type: String, default: "incomplete" },
});

export default mongoose.model("Bundle", bundleSchema);
