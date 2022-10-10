import express from "express"
import {verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js"
import {
	addProduct, 
	getAllProducts, 
	getProductById, 
	updateProduct, 
	deleteProduct} 
	from "../controlers/products.js"

const router = express.Router()


router.post("/add_product", addProduct)

router.get("/get_all_products", getAllProducts)

router.get("/get_product_by_id/:id", getProductById)


router.put("/update_product/:id", updateProduct)

router.delete("/delete_product/:id", deleteProduct)

export default router