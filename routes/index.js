const Contenedor = require("../Contenedor")
const express = require("express")
const router = express.Router();
const ContainerProducts = new Contenedor("./productos.txt");

ContainerProducts.save({title: "A", price: 1, thumbnail: "A(url)"})
ContainerProducts.save({title: "B", price: 2, thumbnail: "B(url)"})
ContainerProducts.save({title: "C", price: 3, thumbnail: "C(url)"})

router.get("/", (req, res)=>{
    res.json(ContainerProducts.getAll());
})

router.get("/:id", (req, res)=>{
    res.json(ContainerProducts.getById(Number(req.params.id)));
})

router.post("/", (req, res)=>{
    res.json(ContainerProducts.save(req.body))
})

router.put("/:id", (req, res)=>{
    res.json(ContainerProducts.saveById(Number(req.params.id), req.body));
})

router.delete("/:id", (req, res)=>{
    res.json(ContainerProducts.deleteById(Number(req.params.id)));
})

module.exports = router;