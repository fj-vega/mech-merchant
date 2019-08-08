import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';


export default () => (
  <div>
    <ProductConsumer>
      {
        value => {
          if (!value.cart.length) {
            return <EmptyCart />;
          }

          return (
            <div className="page-content container py-5">
              <Title text="Your Cart" />
              <CartColumns />
              <CartList />
              <CartTotals />
            </div>
          )  
        }
      }
    </ProductConsumer>
  </div>
)
