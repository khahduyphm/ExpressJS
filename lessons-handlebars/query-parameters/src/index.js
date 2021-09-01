// 7 tìm kiếm bằng routing  http://localhost:3000/search?q=buivantan&ref=a8

const path = require('path'); 
const express = require('express');
const morgan = require('morgan');
const handlebars =  require('express-handlebars');
const { query } = require('express'); //  query để tìm kiếm
const app = express();  
const port = 3000;  


app.use(express.static( path.join(__dirname, 'public'))); // 4

// app.use(morgan('combined')); 
// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs');  
app.set('views', path.join(__dirname, 'resources', 'views'));



app.get('/', (req, res) => { 
  res.render('home'); 
});                           
                             

app.get('/news', (req, res) => {
  res.render('news'); 
});



app.get('/search', (req, res) => {
  console.log(req.query.ref);   // query.ref: ref là key, còn a8 là values  
  res.render('search'); 
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});