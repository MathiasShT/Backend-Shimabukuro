import { Router } from "express";


const router = Router();

const productos = [
    {
        title: "Novillos",
        description: "Novillos de 2 anos",
        code: "Nov2-3",
        price: "630",
        status: true,
        stock: "30",
        category: "Nov2-3",
        id: 1
    },
    {
        title: "Novillos",
        description: "Novillos de 3 anos",
        code: "Nov3-4",
        price: "720",
        status: true,
        stock: "15",
        category: "Nov3-4",
        id: 2 
    }
];

router.get("/", (req, res) => {
    res.json(productos)
})

router.post("/", (req, res) => {
    
    const {title, description, code, price, status, stock, category} = req.body;

    if(!title || !description || !code || !price || !status || !stock || !category){
        res.status(400).json({error: "Todos los campos son obligatorios"});
        return
    }
    let id = productos[productos.length-1].id+1;
    productos.push({title, description, code, price, status, stock, category, id});
    res.send("Producto agregado correctamente")
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(item => item.id === id)
        if(!producto){
            console.log("Not Found")
        }
        else {
            res.send(producto)
        }
})

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title, description, code, price, status, stock, category} = req.body;

    const productFound = productos.find(p => p.id === id);
    if(productFound) {
        const index = productos.findIndex(p => p.id === id)
        productos[index] = {...productos[index], title, description, code, price, status, stock, category}
        res.json({
            message: "Producto actualizado correctamente",
            response: productos[index]
        })
    } else {
        res.status(400).json({ error : "Producto no encontrado"})
    }
})

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    
    const productFound = productos.find(p => p.id === id);
    if(productFound) {
        const index = productos.findIndex(p => p.id === id)
        productos.splice(index, 1)
        res.send("Producto con id" + id + "eliminado con exito")
    } else {
        res.status(400).json({ error : "Producto no encontrado"})
    }
})



export default router;