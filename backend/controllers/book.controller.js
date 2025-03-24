import  Book from '../models/book.model.js';

// SAVE A BOOK
export const createBook = async (req, res) => {

    const book = req.body;
    if(!book.title || !book.author || !book.publishYear){
        return res.status(400).json("Send all required fields")
    }
    const newbook = new Book(book)
    try {
        await newbook.save();
      res.status(200).json({success: true, data: newbook}); 
    } catch (error) {
        console.log(error.messaage);
        res.status(500).json({success: false, msg: "Error post the book"});
    }
};


// GET ALL THE BOOKS
    export const getAllBooks = async (req, res) => {

    try {
        const books = await Book.find({});
        return res.status(200).json({
        success: true,
        count: books.length,
        data: books,      
    })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, msg: "Error to retrieve all the books"});
    }
};

// GET A SINGLE BOOK
    export const getSingleBook =  async (req, res) => {

    const {id} = req.params;
    try {
         const book = await Book.findById(id);
        res.status(200).json({success: true, data: book});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error})
    }
};  

// UPDATE A BOOK
    export const updateBook =  async (req, res) => {
    
    try {
        const books = req.body;
        const {id} = req.params;

    if(!books.title || !books.author || !books.publishYear){
        return res.status(400).json({success: false, msg: "All the fields required"});
    }
        const book = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!book){
            return res.status(404).json({succeess: false, msg: "Book Not found"});
        }
            return res.status(200).json({success: true, data: book});
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, msg: "Anable to find and update"})
    }
};

// DELETE A BOOK
    export const deleteBook = async (req, res) => {

    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        res.status(200).json({success: true, msg: "Successfull deletion"});
        console.log(deletedBook);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, msg: "Error to delete"});
    }
};