import express from "express";
const app = express();
import cartsRouter from "./Routes/carts.routers.js";
import productsRouter from "./Routes/products.router.js";

const PUERTO = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productsRouter);
app.use("/api/cart", cartsRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`)
})




