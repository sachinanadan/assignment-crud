const express = require("expree");
const mongoose = require("mongoose");

const book =require('./model/Book');

const app =expree();
const port = 3000;

//connect mongoose 

mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true, useUnifiedTopology: true });

//post is used for create the data 
app.post('/books',async(req,res)=>{
    const newBook =newBook(req.body);
    try{
        await newBook.save();
        res.json(newBook);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//get is used for read the data 

app.get('/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //patch is used for upadte the data
  
  app.patch('/books/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //delete 

  app.delete('/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.listen(port, () => console.log(Server listening on port ${port}));app.delete('/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.listen(port, () => console.log(Server listening on port ${port}));



