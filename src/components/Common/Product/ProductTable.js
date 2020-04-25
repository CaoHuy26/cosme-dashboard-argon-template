import React, { useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { Table } from 'reactstrap';
import ProductTableRow from './ProductTableRow';
import { useDispatch, useSelector } from 'react-redux';
import productActions from 'redux/product/productActions';

function ProductTable() {
  
  const productReducers = useSelector(state => state.productReducers);
  const isLoading = useSelector(state => state.productReducers.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchData() {
      dispatch(productActions.fetchProducts());
    }
    fetchData();
  }, []);

  return (
    <>
      {
        isLoading
          ? <LinearProgress variant="query" />
          : (
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Tình trạng</th>
                  <th scope="col">Khách đã mua</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {
                  productReducers.products.map(product => (
                    <ProductTableRow
                      key={product.id}
                      product={product}
                    />
                  ))
                }
              </tbody>
            </Table>
          )
      }
    </>
  );
}

export default ProductTable;