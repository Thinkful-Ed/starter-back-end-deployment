require("dotenv").config();
const express = require("express");
const app = express();
const productsRouter = require("./products/products.router");

app.use(express.json());
app.use("/ping", (_request, response, _next) => {
  response.json({ data: "pong!" });
});
app.use("/products", productsRouter);

// Not found handler
app.use((request, _response, next) => {
  next({ status: 404, message: `Not found: ${request.originalUrl}` });
});

// Error handler
app.use((error, _request, response, _next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  response.status(status).json({ errors: [message] });
});

module.exports = app;
