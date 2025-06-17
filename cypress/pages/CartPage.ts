import BasePage from './BasePage';

/**
 * Page object for the Cart page
 */
class CartPage extends BasePage {
    protected path = '/view_cart';

    // Selectors
    private readonly cartTable = '#cart_info_table';
    
} export default new CartPage();