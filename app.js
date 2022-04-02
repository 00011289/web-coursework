const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let port = process.env.PORT || 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoute = require('./routes/main');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(mainRoute);

app.use((req,res)=>{
  res.render('main/error',{
    title: 'Error page'
  })
})

mongoose
  .connect('mongodb+srv://00011289:webtechnology@cluster0.biasw.mongodb.net/task_implementation')
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
});

