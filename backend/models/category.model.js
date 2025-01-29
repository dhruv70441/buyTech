import mongoose from 'mongoose';

// Define the schema
const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

// Define the model and specify a custom collection name
const Category = mongoose.model('Category', categorySchema, 'categories'); // Collection name will be 'categories'

export default Category;
