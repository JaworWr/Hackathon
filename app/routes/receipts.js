const fs = require('fs');
const util = require('util');

const pReadDir = util.promisify(fs.readdir);

async function loadData(dir) {
    let files = await pReadDir(dir);
    let objects = files.map(f => {
        return require(dir + '/' + f);
    });
    return objects;
}

module.exports = function(app) {
    app.get('/receipts', (req, res) => {
        let receipts = require('../receipts.json');
        if (req.query.n) {
            receipts = receipts.slice(-req.query.n);
        }
        res.json(receipts)
    })
}