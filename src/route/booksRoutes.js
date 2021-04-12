const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    var books = [
         {
             title: 'Jurassic Park',
             author: 'Michael Crichton',
             genre:'Fantasy',
             img: "jurassic_park.jpg",
            
         },
         {
             title: 'Harry Potter',
             author: 'J.K. Rowling',
             genre:'Fantasy',
             img: "Harry.jpg",
             
         },
         {
             title: 'Twilight Saga',
             author: 'Stephanie Meyer',
             genre:'Fantasy',
             img: "twilight.jpg",
             
         },

    ]
    
    booksRouter.get('/',function(req,res){
        // Bookdata.find()
        // .then(function(books){
        //     res.render("books",{
        //         nav,
        //         title:'Library',
        //         books
        //     });

        // })
        res.render("books",
        {
            nav,
            title:'Library',
            books      
        });

    })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;//id is like a argument for i
        // Bookdata.findOne({_id: id})
        // .then(function(book){
        //     res.render('book',{
        //         nav,
        //         title:'Library',
        //         book
        
        //     });
        // })
        res.render("book",{
            nav,
            title:'Library',
            book : books[id]

        });

    }) 
    
 return booksRouter;
}


module.exports = router;