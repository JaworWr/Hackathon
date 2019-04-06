const express = require("express");
const http = require("http");
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

var upload = multer({ dest: 'uploads/' });

app.set("view engine", "ejs");
app.set('views', 'app/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("app/public"));
app.use(morgan('dev'));

require('./routes')(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/upload', (req, res) => {
    res.render('upload.ejs');
})


app.post('/upload', upload.single('file'), function(req, res, next){
    console.log(req.file)
    res.end('ok')
});


app.listen(3000);
