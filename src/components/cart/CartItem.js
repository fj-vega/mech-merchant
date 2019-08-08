import React from 'react';
import { ProductConsumer } from '../../context';


export default ({ itemId }) => (
  <ProductConsumer>
    {
      value => {
        const { changeQuantity, removeItem } = value;

        const { id, title, img, price, total, count } = value.cart.find(item => item.id === itemId);

        return (
          <div className="row my-5 text-center align-items-center">
            <div className="col-10 col-lg-2 mx-auto">
              <img src={ img } alt="Product" className="img-fluid"/>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <span className="d-lg-none">Product: </span> 
              { title }
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <span className="d-lg-none">Price: </span> 
              ${ price }
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-8">
              <div className="d-flex justify-content-center">
                <div>
                  <button className="btn btn-black mx-1" onClick={ () => changeQuantity('decrement', id) }>
                    -
                  </button>
                  <span className="btn btn-black mx-1">
                    { count }
                  </span>
                  <button className="btn btn-black mx-1" onClick={ () => changeQuantity('increment', id) }>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <div className="cart-item" onClick={ () => removeItem(id) }>
                <i className="fas fa-trash"></i>
              </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <strong>Item total: ${ total }</strong>
            </div>
          </div>
        )
      }
    }
  </ProductConsumer>
)
