import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import Product from './Product';
import { ProductConsumer } from '../context';


export default () => (
  <div className="page-content py-5">
    <div className="container mb-5">
      <Title text="Our Products" />

      <SearchBar />

      <div className="row">
        <ProductConsumer>
          { 
            value => {
              const products = value.products.map(product => (
                <Product key={ product.id } productId={ product.id } />
              ));

              if (!products.length) {
                return(
                  <div className="container text-center mt-5">
                    <h3>No products found</h3>
                  </div>
                )
              } else {
                return products;
              }
            }
          }
        </ProductConsumer>
      </div>
    </div>
  </div>
)
