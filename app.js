
/**
 * app 入口
 * */
var createError    = require('http-errors');

var express        = require('express');

var path           = require('path');

var cookieParser   = require('cookie-parser');

var bodyParser     = require('body-parser');

var morgan         = require('morgan');

var fs             = require('fs');

var ejs            = require('ejs');

var favicon        = require('serve-favicon');

var time           = require('./common/time');

// routes list
var indexRouter    = require('./routes/index');

var usersRouter    = require('./routes/users');

var questionRouter = require('./routes/question');

var uploadRouter   = require('./routes/upload');

var loginRouter    = require('./routes/login');

// 获取express实例
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public'));

app.engine('.html',ejs.__express);

app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser());

// it parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

// ??

var accessLogStream = fs.createWriteStream(path.join(__dirname,'/logs/'+time.getCurrentDate()+'log.log'),{flags:'a'})
app.use(morgan('dev',{stream:accessLogStream}));

//app.use(morgan('dev'));

// 顶级路由配置
app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/question', questionRouter);

app.use('/upload', uploadRouter);

app.use('/login', loginRouter);

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
