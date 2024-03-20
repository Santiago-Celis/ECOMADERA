import { Category } from "../models/Product.js";

export const createCategory = async ( req, res ) => {
    const { name } = req.body

    try {
        const newCategory = await  Category.create({name});
        const categorySaved = newCategory;
        res.status(201).json(categorySaved)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const getCategories = async (req, res) => {

    try {
        const categories = await Category.findAll();
        res.json(categories)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCategory = async  (req, res) => {

    const id = req.params.id

    const category = await Category.findByPk(id);
    res.json(category);

}

export const updateCategory = async (req, res) => {
    const { name } = req.body

    try {
        const category = await Category.update({
            name,
        },{ where: { id: req.params.id }})

    
        console.log("Se ha actualizado la categoria con exito");
        res.status(201).json({ message: "Se ha actualizado con exito"})

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const deleteCategory = async (req, res) => {

    const category = Category.destroy({
        where: { id: req.params.id }
    })
    if(!category) return res.status(404).json({ message: "no se encontro la categoria" })
    res.status(200).json({ message: "Se ha eliminado la categoria correctamente" })

}