const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const orm = require('./config/database.orm')
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');

const {database} = require('./keys');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3500);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//middlewares
app.use(session({
    secret:'vocal',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Global Variables
app.use((req, rest, next) =>{
    app.locals.success = req.flash('success')
    next();
});

//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));
app.use('/goals', require('./routes/goals.routes'));
app.use('/admonitions', require('./routes/admonitions.routes'));
app.use('/expulsions', require('./routes/expulsions.routes'));
app.use('/players', require('./routes/players.routes'));
app.use('/matches', require('./routes/matches.routes'));
app.use('/observations', require('./routes/observations.routes'));
app.use('/players', require('./routes/players.routes'));
app.use('/stadiums', require('./routes/stadiums.routes'));
app.use('/teams', require('./routes/teams.routes'));
//Public
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});