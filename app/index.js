const express = require("express");
const session = require("express-session");
const morgan = require('morgan');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

app.locals.upload = multer({ dest: 'uploads/' });

app.set("view engine", "ejs");
app.set('views', 'app/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("app/public"));
app.use(morgan('dev'));

require('./routes')(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/stats', (req, res) => {
    res.render('stats.ejs');
})

app.listen(3000);
