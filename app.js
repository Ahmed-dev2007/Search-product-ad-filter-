function filterProducts() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();
    const priceFilter = document.getElementById('priceFilter').value;
    const productGrid = document.getElementById('productGrid');
    const products = productGrid.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getAttribute('data-name').toLowerCase();
        let productCategory = products[i].getAttribute('data-category').toLowerCase();
        let productPrice = parseFloat(products[i].getAttribute('data-price'));

        let priceRange = priceFilter.split('-');
        let minPrice = parseFloat(priceRange[0]);
        let maxPrice = parseFloat(priceRange[1]);

        if (
            (productName.includes(searchBar) || searchBar === "") &&
            (productCategory.includes(categoryFilter) || categoryFilter === "") &&
            (priceFilter === "" || (productPrice >= minPrice && productPrice <= maxPrice))
        ) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
