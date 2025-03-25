import express from 'express';
import { createBook, deleteBook, getAllBooks, getSingleBook, updateBook } from '../controllers/book.controller.js';
const router = express.Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:id', getSingleBook)
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
