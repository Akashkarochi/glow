const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI);

app.post("/recommend", (req, res) => {
  const { scanData } = req.body;
  // Pretend we process the scan and return recommendations
  res.json({
    products: ["Gentle Cleanser", "Tea Tree Oil"],
    remedies: ["Turmeric + Honey", "Multani Mitti Mask"]
  });
});

app.listen(5000, () => console.log("GlowWise backend running..."));