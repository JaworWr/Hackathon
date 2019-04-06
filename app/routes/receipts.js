function loadReceipts(path) {
    let receipts = require(path);
    let products = {};
    receipts.forEach(r => {
        r.date = new Date(r.date * 1000);
        r.products.forEach(p => {
            if (p.name in products) {
                products[p.name].price += p.price;
                products[p.name].quantity += p.quantity;
            }
            else {
                products[p.name] = {price: p.price, quantity: p.quantity, category: p.category, name: p.name};
            }
        })
    })
    return {
        receipts: receipts,
        products: products
    };
}

function compareField(field) {
    return (a, b) => b[field] - a[field];
}

function topProducts(receipts, cat, n) {
    let res = {};
    let {products} = receipts;
    let products_l = Object.entries(products).map(x => x[1]);
    if (cat) {
        products_l = products_l.filter(p => p.category == cat);
    }
    products_l = products_l.sort(compareField('price'));
    res.price = products_l.slice(0, n);
    products_l = products_l.sort(compareField('quantity'));
    res.quantity = products_l.slice(0, n);
    return res;
}

function total(receipts, cat) {
    let res = {
        price: 0,
        quantity: 0
    }
    let {products} = receipts;
    for (p in products) {
        if (products[p].category == cat) {
            res.price += products[p].price;
            res.quantity += products[p].quantity;
        }
    }
    return res;
}

module.exports = function(app) {
    app.get('/receipts', (req, res) => {
        let receipts = loadReceipts('../receipts.json')
        console.log(receipts);
        app.locals.receipts = receipts;
        res.json(receipts.receipts);
    })

    app.get('/category_stats', (req, res) => {
        let cat = req.query.category;
        let n = req.query.n || 5;
        console.log(cat);
        if (!app.locals.receipts) {
            app.locals.receipts = loadReceipts('../receipts.json');
        }
        let receipts = app.locals.receipts;
        let friendReceipts = loadReceipts('../friend_receipts.json');
        let globalReceipts = loadReceipts('../global_receipts.json'); //boli.
        let result = {
            topProducts: topProducts(receipts, cat, n),
            userTotal: total(receipts, cat),  
            friendsTotal: total(friendReceipts, cat),
            globalTotal: total(globalReceipts, cat)
        }
        res.json(result);
    })

}