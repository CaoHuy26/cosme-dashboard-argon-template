import productActionTypes from './productTypes';

const productActions = {
  fetchProducts: () => {
    return {
      type: productActionTypes.FETCH_PRODUCTS_REQUEST
    }
  },
  deleteProduct: productId => {
    return {
      type: productActionTypes.DELETE_PRODUCT_REQUEST,
      productId
    }
  },
  editProduct: (productId, newProduct) => {
    return {
      type: productActionTypes.EDIT_PRODUCT_REQUEST,
      productId,
      newProduct
    }
  }
};

export default productActions;