import productActionTypes from './productTypes';

const initialState = {
  isLoading: false,
  success: false,
  products: [],
  error: null
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case productActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        products: action.payload,
        error: null
      }
    case productActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        products: [],
        error: action.error
      }

    case productActionTypes.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: false,
        error: null
      }
    case productActionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        products: 
          state.products.filter(
            product => product.id !== action.productId
          ),
        error: null
      }
    case productActionTypes.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.error
      }

    case productActionTypes.EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: false,
        error: null
      }
    case productActionTypes.EDIT_PRODUCT_SUCCESS:
      const { productId, newProduct } = action;
      return {
        ...state,
        isLoading: false,
        success: true,
        products:
          state.products.map(
            product => product.id === productId
              ? {...product, ...newProduct}
              : product
          ),
        error: null
      }
    case productActionTypes.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.error
      }

    default:
      return state
  }
};

export default productReducers;