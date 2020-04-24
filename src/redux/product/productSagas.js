import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import productActionTypes from './productTypes';

function* fetchProducts() {
  try {
    const res = yield axios.get('http://localhost:3000/p/products');
    const { statusCode, data } = res.data;
    if (statusCode === 200) {
      yield put({
        type: productActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data
      });
    }
    else {
      yield put({
        type: productActionTypes.FETCH_PRODUCTS_FAILURE,
        error: res.data.msg
      });
    }
  }
  catch (error) {
    yield put({
      type: productActionTypes.FETCH_PRODUCTS_FAILURE,
      error
    })
  }
};

function* fetchProductsWatcher() {
  yield takeEvery(productActionTypes.FETCH_PRODUCTS_REQUEST, fetchProducts);
};

function* deleteProduct(action) {
  try {
    const { productId } = action;
    const res = yield axios.delete(`http://localhost:3000/p/${productId}`);
    if (res.data.statusCode === 200) {
      yield put({
        type: productActionTypes.DELETE_PRODUCT_SUCCESS,
        productId
      });
    }
    else {
      yield put({
        type: productActionTypes.FETCH_PRODUCTS_FAILURE,
        error: res.data.msg
      });
    }
  }
  catch (error) {
    yield put({
      type: productActionTypes.DELETE_PRODUCT_FAILURE,
      error
    });
  }
};

function* deleteProductWatcher() {
  yield takeEvery(productActionTypes.DELETE_PRODUCT_REQUEST, deleteProduct);
};

function* editProduct(action) {
  try {
    const { productId, newProduct } = action;
    const res = yield axios.put(`http://localhost:3000/p/${productId}`, newProduct);
    const { statusCode, data } = res.data;
    if (statusCode === 200) {
      yield put({
        type: productActionTypes.EDIT_PRODUCT_SUCCESS,
        productId,
        newProduct: data
      });
    }
    else {
      yield put({
        type: productActionTypes.EDIT_PRODUCT_FAILURE,
        error: res.data.msg
      });
    }
  }
  catch (error) {
    yield put({
      type: productActionTypes.EDIT_PRODUCT_FAILURE,
      error
    });
  }
};

function* editProductWatcher() {
  yield takeEvery(productActionTypes.EDIT_PRODUCT_REQUEST, editProduct);
}

export {
  fetchProductsWatcher,
  deleteProductWatcher,
  editProductWatcher
};