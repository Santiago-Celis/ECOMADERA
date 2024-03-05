import { Cart } from "../models/Cart.js";
import  { Product } from "../models/Product.js"

export const getProductsCart = async (req, res) => {
    const productsCart = await Cart.findAll();

    if(productsCart){
        return res.status(201).json({productsCart});
    }else{
        return res.status(404).json({
            success: false,
            msg: 'No hay productos en el carrito'
        })
    }

}

export const addProductCart = async (req, res) => {
    const { name, imgurl, price } = req.body;

    const estaEnProducts = await Product.findOne({ where:{name}});
    const notEmpty = name !== "" &&  imgurl !== "" &&  price !== "";
    const estaEnCarrito = await Cart.findOne({ name })

    if(!estaEnProducts){
        res.status(400).json({
            message: "Este producto no existe"
        })
    }else if(notEmpty && !estaEnCarrito){
        const newProductCart = Cart.create({ name, imgurl, price, amount:1 })

        const productCart = Product.findByPk(
            estaEnProducts?.id,
            { inCart: true, name, imgurl, price},
            { new:true }
        )
        .then((product) => {
            newProductCart.save();
            res.json({
                message:"Se agrego correctamente al carrito",
                product
            });
        })
        .catch((err) => console.log(err));

    }else if(estaEnCarrito){
        res.status(409).send("El producto ya se encuentra en el carrito");
    }

}

export const putProduct = async (req, res) => {
    const { productId } = req.params;
    const { query } = req.query;
    const body = req.body;

    const productBuscado = await Cart.findByPk(productId);

    if(!query) {
        res.status(404).json({ message: "Debes enviar una query" })
    } else if(productBuscado && query === "add"){
        body.amount = body.amount + 1;

        const productoCarrito = await Cart.findByPk(productId);
        await Cart.update({where: productoCarrito}, body, {
            new: true,
        }).then((product) => {
            res.json({
                message: `El producto ${product.name} fue actualizado`,
                product,
            })
        });
    } else {
        res.status(400).json({ message: "Ocurrio un error" })
    }

}

export const deleteProductCart = async (req, res) => {
    const { productId } = req.params;

    const productInCart = await Cart.findByPk(productId);

    const { name, imgurl, price, id } = await Product.findOne({
        name: productInCart.name,
    });

    await Cart.destroy({ where: {id : productId}});

    await Product.update({
        inCart: false,
        name,
        imgurl,
        price
        
    },{where: {id}},{new:true})
    .then((product) => {
        res.json({
            message: `El producto ${product.name} fue eliminado del carrito`
        });
    })
    .catch((error) => res.json({ message: "Hubo un error" }))
        

}