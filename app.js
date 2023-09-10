require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.API_PORT || 5000;
const {
  getApiBasiscProductsInfo,
  getProducts,
  getProductsFeatured,
  getProduct,
} = require("./controllers/products");


// Middlwares: handling static files, Parsing incoming json data, accepten any request from any place;
app.use('/api/images', express.static('public/images'))
app.use(express.json());
app.use(cors());


// Setting up the routes and them methods;
app.get("/api/info", getApiBasiscProductsInfo);
app.get("/api/products", getProducts);
app.get("/api/products/featured", getProductsFeatured);
app.get("/api/products/:id", getProduct);


// Running the server, the communication;
app.listen(port, function() {
  console.log("Server now is running and listening in:", port);
})