require("dotenv").config();
const router = require("./routes/products.routes");
const express = require("express");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});

const app = express();

app.use(express.json());
