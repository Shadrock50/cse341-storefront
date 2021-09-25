const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const books = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {

    res.render('index', {pageTitle: 'Add Product'});

});

app.get('/book-list', (req, res, next) => {

    res.render('books', 
    {pageTitle: 'Book List',
    books: books,
    hasBooks: books.length > 0
    
});

});

app.post('/add-product', (req, res, next) => {

    books.push({ name: req.body.bookTitle, bookDesc: req.body.bookDesc, price: req.body.price });
    res.redirect('/book-list');

});


app.listen(process.env.PORT || 5000);