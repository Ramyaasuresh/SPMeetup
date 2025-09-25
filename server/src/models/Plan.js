const mongoose = require('mongoose');  
const planSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    place: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    visibleTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // ✅ new field
  },
  { timestamps: true }
);
