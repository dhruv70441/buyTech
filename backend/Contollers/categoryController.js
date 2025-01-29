import Category from "../models/category.model.js";


// Get all categories
export const getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving categories', error });
    }
  };