
﻿import BasePage from './BasePage';

 class ProductsPage extends BasePage {
    protected path = '/products';

    // Selectors
    private readonly allProductsText = '.title';
   

}

export default new ProductsPage();