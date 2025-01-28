import Product from "../models/product.model.js"


export const getProducts = async(req, res) => {
    
    try {
        const allProducts = await Product.find()
        return res.status(200).json({
            success: true,
            message:'All the products',
            allProducts
        })
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            message:'Product not found',
            Error:err
        })
    }
}


export const getProductById = async(req, res) => {
    
    try {
        const productId = req.params.id
        
        const productData = await Product.findById(productId) 

        if(!productData) {
            return res.status(500).json({
                success: false,
                message:'Product not found',
            })
        }
        return res.status(200).json({
            success: true,
            message:'product found',
            productData
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message:'Product not found',
            Error:err.message
        })
    }
}
