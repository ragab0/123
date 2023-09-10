const products = require("../data/products");
const productsSearchStructure = new Map();
let basicProductsInfo = {
  colors: new Set(),
  categorys: new Set(),
  companys: new Set(),
  maxPrice: new Number(0),
};


// Rendered only one time, mapping only one time to set the all data that i need in one map
products.forEach(pro => {
  const { colors, category, price, company } = pro;
  productsSearchStructure.set(pro.id, pro);
  basicProductsInfo.colors.add(...colors);
  basicProductsInfo.categorys.add(category);
  basicProductsInfo.companys.add(company);
  basicProductsInfo.maxPrice = price > basicProductsInfo.maxPrice ? price : basicProductsInfo.maxPrice;
})
basicProductsInfo = {
  ...basicProductsInfo,
  colors: [...basicProductsInfo.colors],
  categorys: [...basicProductsInfo.categorys],
  companys: [...basicProductsInfo.companys],
}


// 01 handelr
function getApiBasiscProductsInfo(req, res) {
  res.json(basicProductsInfo);
}

// 02 handelr
function getProducts(req, res) {
  res.json(products);
}

// 03 handelr
function getProducts(req, res) {
  res.json(products);
}

function getProductsFeatured(req, res) {
  res.json(products.slice(0, 3));
}

// 04 handelr
function getProduct(req, res) {
  const { id } = req.params;
  const product = productsSearchStructure.get(id);
  if (!product) {
    return res.status(404).send("Product isn't exist");
  }
  res.status(200).json(product)
 }


module.exports = {
  getApiBasiscProductsInfo,
  getProducts,
  getProductsFeatured,
  getProduct,
}