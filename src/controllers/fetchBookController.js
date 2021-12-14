const { get } = require('express/lib/response');
let books = require('../books.json');
const fetchBookController = () => {
    return {
        fetchBook: function (req, res) {

            const getBook = books.filter((book) => {
                const { id } = req.body;
                return book.id === id;
            })

            if (getBook.length) {
                res.json({ book: getBook });
            }
            else {
                res.json({ FailureMessage: "No book found!" });
            }
        }
    }
}

module.exports = fetchBookController;