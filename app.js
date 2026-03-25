var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//cors
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const docsRoutes = require('./routes/docs');
const asientoRoutes = require('./routes/asiento');
const funcionRoutes = require('./routes/funcion');
const peliculaRoutes = require('./routes/pelicula');
const usuarioRoutes = require('./routes/usuario');
const compraRoutes = require('./routes/compra');
const salaRoutes = require('./routes/sala');

//doc
app.use('/', docsRoutes);
//api

app.use('/api/asientos', asientoRoutes);
app.use('/api/funciones', funcionRoutes);
app.use('/api/peliculas', peliculaRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/compras', compraRoutes);
app.use('/api/salas', salaRoutes);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
