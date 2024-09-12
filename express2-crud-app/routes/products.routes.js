const express = require("express");
const {
  getAllProducts,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
} = require("../controllers/products.controllers");

const router = express.Router();

router.route("/").get(getAllProducts).post(postProduct);
router
  .route("/:id")
  .get(getProductById)
  .patch(patchProduct)
  .delete(deleteProduct);

module.exports = router;
