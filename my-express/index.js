const express = require('express');
const Joi =  require('joi');
const logger = require('./logger');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //key1=value1&key2=value2&... => url encoded deyiladi
app.use(express.static('public'));
// app.use(logger);
app.use(helmet());

//kitoblar massivi e`lon qilindi
const books = [
    {'id' : 1, 'name' : 'hello jungle'},
    {'id' : 2, 'name' : 'Alica in wonderfulland'},
    {'id' : 3, 'name' : 'Jack Tominay'},
    {'id' : 4, 'name' : 'Hello world'}
];

//faylga log yozish
var accessLogStream = fs.createWriteStream(path.join(__dirname, './public/kirish.log'), {
    flags: 'a'
}) 

app.use(morgan('combined', { stream: accessLogStream }));

//bosh sahifaga so'rov
app.get('/', (req, res) => {
    res.send('Salom, Ravshanbek');
});

//ma`lumotni validatsiya qilish
function validateBook(book){
    const bookSchema = {
        name: Joi.string().required().min(5)
    };

    return Joi.validate(book, bookSchema);
}

app.get('/api/books', (req, res) => {
    res.send(books);
});

//kitoblar massiviga ma'lumot yozish
app.post('/api/books', (req, res) => {
    const { error } = validateBook(req.body);
    if(error){
       return res.status(400).send(error.details[0].message);
    }
    const book = {
        id: books.length + 1,
        name: req.body.name
    };
    books.push(book);
    res.status(201).send(book);
});

//berilgan id bo'yicha ma'lumotni izlash
app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book)
        res.status(404).send("Bunday ma'lumot yo'q");
    res.send(book);
});


//ma`lumotni yozish
app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book)
       return res.status(404).send("Bunday ma'lumot yo'q");
   
    const { error } = validateBook(req.body);
    if(error){
       return res.status(400).send(error.details[0].message);
    }

    book.name = req.body.name;
    res.send(book);
});

//ma`lumotni o`chirish
app.delete('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book)
       return res.status(404).send("Bunday ma'lumot yo'q");

    const bookIndex = books.indexOf(book);
    books.splice(bookIndex, 1);
    
    res.send(book);
});


//portni aniqlash
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`${port} - portni eshitishni boshladim...`);
})