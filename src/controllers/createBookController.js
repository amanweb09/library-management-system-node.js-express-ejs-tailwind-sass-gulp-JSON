let books = require('../books.json');
const fs = require('fs');
const path = require('path');
const { log } = require('console');

const createBookController = () => {
    return {
        create: function (req, res) {
            const { id, title, author, stock } = req.body;


            if (!id || !title || !author || !stock) {
                return  res.json({failureMessage: "Please fill all the fields!"})
            }
            else {
                const newBook = {
                    id, title, author, stock
                }
                books.push(newBook);
    
                const books_path = path.join(__dirname, '../books.json')
                fs.writeFileSync(books_path, JSON.stringify(books), (err) => {
                    console.log(err);
                })

                return res.status(201).json({successMessage: "Book Added Successfully!"})
            }

        }
    }
}

module.exports = createBookController;