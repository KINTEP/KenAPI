import {createError} from "../utils/error.js"
import productsTable from "../models/products.js"



//ADD A NEW PRODUCT
export const addProduct = async (req, res, next) => {
	const newProduct = productsTable(req.body)
	try{
			const saveProduct = await newProduct.save()
			res.status(200).json(saveProduct)
		}
	catch(err)
		{
			next(err)
		}
}

// GET ALL PRODUCTS
export const getAllProducts = async (req, res, next) => {
	try{
		const product = await productsTable.find()
		res.status(200).json(product)
	}catch(err){
		 next(err)
	}
}

//GET ONE PRODUCT BY ID
export const getProductById = async (req, res, next) => {
	try{
		const product = await productsTable.findById(req.params.id)
		res.status(200).json(product)
	}catch(err){
		 next(err)
	}
}

//UPDATE ONE PRODUCT
export const updateProduct = async (req, res, next) => {
	//console.log(req.body)
	try{
		const updatedProduct = await productsTable.findByIdAndUpdate(
			req.params.id, 
			{$set: req.body},
			{new: true})
		res.status(200).json(updatedProduct)
	}catch(err){
		 next(err)
	}
}

//DELETE ONE
export const deleteProduct = async (req, res, next) => {
	try{
		await productsTable.findByIdAndDelete(req.params.id)
		res.status(200).json("Product has been deleted")
	}catch(err){
		next(err)
	}
}