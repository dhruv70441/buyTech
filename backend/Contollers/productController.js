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

export const getProductByCategory = async (req, res) => {
    try {
        const { productCategory } = req.params;  // Extract category from URL params
        
        // Fetch products for the specified category
        const productData = await Product.find({ category: productCategory });

        // If no products are found, return an empty array or null
        if (productData.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No products found in this category',
                productData: []  // Could also be null based on your preference
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Products found',
            productData  // Return products if found
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching products',
            Error: err.message  // Detailed error message
        });
    }
};
