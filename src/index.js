const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.engine('.hbs'.exphbs({
    defaultLayout: 'main',
    layoutsDir

}))

//middlewares
app.use(morgan('dev'));

//Global Variables

//Routes
app.use(require('./routes'));

//Public

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});