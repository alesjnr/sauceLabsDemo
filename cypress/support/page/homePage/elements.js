export const ELEMENTS_HOME_PAGE = {
  divStoreInventory: 'div[id="inventory_container"]',
  buttonAddProductToCart: (productID) => `button[data-test="add-to-cart-${productID}"]`,
  buttonRemoveProductFromCart: (productID) => `button[data-test="remove-${productID}"]`,
  spanCartItemsCount: 'span[class="shopping_cart_badge"]',
  buttonGoToCart: 'div[id="shopping_cart_container"]'
};
