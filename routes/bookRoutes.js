import express from 'express'
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController.js'

const bookRouter = express.Router()

bookRouter.post('', createBook)
bookRouter.get('', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)

export default bookRouter
