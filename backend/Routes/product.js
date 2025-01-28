import express from 'express'
import { getProductById, getProducts } from '../Contollers/productController.js'

const router = express.Router()

//Get all product || get
router.get("/", getProducts)

//Get product by id || get
router.get("/:id", getProductById)

//Get products by category || get
router.get("/:category")


export default router;
