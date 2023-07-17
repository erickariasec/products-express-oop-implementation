const express = require("express");
const productRouter = require("./src/routes/product.router");
const app = express();
const port = process.env.PORT || 3006;

app.get("/", (req, res) => {
  res.json({
    status: "Ok",
    message: "Success!",
    homework: "Tarea 3.1 - Express - OOP",
    student: "Erick Roberto Arias Sánchez",
  });
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
