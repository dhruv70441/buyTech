import express from 'express'

const router = express.Router()

//Get all product || get
router.get("/product")

//Get product by id || get
router.get("./product/:id")

//Get products by category || get
router.get("/product/:category")


export default router;
