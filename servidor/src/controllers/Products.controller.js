import { Product } from "../models/Product.js";
import multer from "multer";
import fs from 'fs';

export const createProduct = async (req, res) => {
    const { name, height, width, depth, price, description, categoryId} = req.body;
    let nameImage = req.file.path.split('\\')
    nameImage = nameImage[nameImage.length - 1]
    nameImage = nameImage.replace(' ', '_')
    console.log( nameImage[nameImage.lenght - 1])
    const imagenURL = req.file ? nameImage : null;


    try {
        const newProduct = await Product.create({
            name, 
            height, 
            width, 
            depth, 
            description,
            categoryId,
            price,
            imagenURL  
        });

        const productSaved = await newProduct.save();

        return res.status(201).json(productSaved);
    } catch (error) {
       res.status(500).json({
        message: error.message
       }) 
    }

}

export const  getProducts = async (req, res) =>{
    
    const productos = await Product.findAll();
    res.json(productos)

}

export const getProduct = async (req, res) => {

    const productId = req.params.id

    const producto = await Product.findByPk(productId);
    res.json(producto)

}

export const getProductCategory = async (req, res) => {

    const categoria = req.params.categoryId
    const producto = await Product.findAll({where: { categoryId: categoria }});
    res.json(producto)

}

export const updateProduct = async ( req, res ) => {
    
    const { name, height, width, depth, price, description, categoryId} = req.body;
    const image = req.file ? req.file.path : null;

    const product = await Product.update({
        name,
        height,
        width,
        depth,
        price,
        description,
        categoryId,
        imageUrl: image
    }, { where: { id: req.params.id }})

    console.log("El producto se ha actualizado de manera correcta");
    res.status(201).json(product);
    

}

export const deleteProduct = async (req, res) => {

    const product = await Product.destroy({
        where:{
            id: req.params.id
        }
    })
    if(!product) return res.status(404).json({ message: "no se encontro el producto" })
    res.status(200).json({ message: "Se ha eliminado el producto correctamente" })

}
