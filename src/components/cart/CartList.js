import React from 'react';
import { ProductConsumer } from '../../context';
import CartItem from './CartItem';


export default () => (
  <ProductConsumer>
    {
      value => (
        <div className="container">
          {
            value.cart.map(item => (
              <CartItem key={ item.id } itemId={ item.id } />
            ))
          }
        </div>
      )
    }
  </ProductConsumer>
)
