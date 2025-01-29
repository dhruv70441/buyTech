import express from 'express';
import { getCategories } from '../Contollers/categoryController.js';

const router = express.Router();
router.get('/', getCategories);

export default router;
