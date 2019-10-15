const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


//init
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
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
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// variables globales
app.use((req, res, next) => {
    next();
});

//routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/users', require('./routes/users'));
app.use('/aboutus', require('./routes/aboutus'));
app.use('/index', require('./routes/index'));
app.use('/partners', require('./routes/partners'));
app.use('/news', require('./routes/news'));


//publics
app.use(express.static(path.join(__dirname, 'public')));


//start server
app.listen(app.get('port'), () => {
    console.log('pilot on air', app.get('port'));
});

// command: "git status" muestra modificaciones específicas al proyecto.
// command: "git add ." añade todas las modificaciones mostradas.
