require("dotenv").config();
const router = require("./routes/products.routes");
const express = require("express");
const cors = require("cors");
const { time } = require("./middleware/time");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded());

app.use("/products",time, router);

app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
