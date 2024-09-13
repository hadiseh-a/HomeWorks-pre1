let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

const getProductById = (req, res) => {
  const findProduct = products.find((product) => product.id === req.params.id);
  if (!findProduct) {
    return res.status(404).json({ msg: "not found" });
  }
  return res.status(200).json(findProduct);
};

const postProduct = (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  return res.status(200).json(findProduct);
};

const patchProduct = (req, res) => {
  const findProduct = products.find((product) => product.id === req.params.id);
  const updatedProduct = { ...findProduct, ...req.body };
  findProduct = updatedProduct;
  if (!findProduct) return res.status(404).json({ msg: "not found" });
  return res.status(200).json(updatedUser);
};

const deleteProduct = (req, res) => {
  const findProduct = products.find((product) => product.id === req.params.id);
  if (!findProduct) return res.status(404).json({ msg: "not found" });
  products.splice(findProduct, 1);
  return res.status(200).json(findProduct);
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
};
