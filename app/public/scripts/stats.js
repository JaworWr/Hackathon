function totalByCategory(receipts, cat) {
    total = 0;
    for (r of receipts) {
        for (p of r.products) {
            if (p.category == cat) {
                total += p.price;
            }
        }
    }
}
