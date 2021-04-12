
const express = require('express');
const authRouter = express.Router();

function arouter(nav){
    var authors = [
        {
            author:'Michael Crichton',
            img: "michael.jpg",
            genre:'Fantasy',
            Book1:'Jurassic Park'
            
            
        },
        {
            author:'J.K. Rowling',
            img: "JK.jpg",
            genre:'Fantasy',
            Book1:'Harry Potter',
            Book2:'Fantastic Beastes and where to find them'
        },
        {
            author:'Stephenie Meyer',
            img: "Meyer.jpg",
            genre:'Fantasy',
            Book1:'Twilight Saga',
            
        }
    ]
    
    authRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors      
        });
    })

   
    authRouter.get('/:i1',function(req,res){
        const i1 = req.params.i1
        res.render("author",{
            nav,
            title:'Library',
            author : authors[i1]

        });
    })


     return authRouter;


}


module.exports = arouter;