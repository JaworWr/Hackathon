const {spawn} = require('child_process');
const path = require('path');

function runScript(img_path){
    return spawn('python3', [
      "-u", 
      path.join(__dirname, '../receipt.py'),
      img_path
    ]);
  }

module.exports = function(app) {
    app.get('/upload', (req, res) => {
        res.render('upload.ejs');
    })
    
    app.post('/upload', app.locals.upload.single('file'), function(req, res, next){
        console.log(req.file)
        console.log(path.join(__dirname, '../..', req.file.path))
        const subprocess = runScript(path.join(__dirname, '../..', req.file.path))
  
        // print output of script
        subprocess.stdout.on('data', (data) => {
          console.log(`data:${data}`);
        });
        res.end('ok')
    });
}