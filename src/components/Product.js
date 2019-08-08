import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';


export default ({ productId }) => (
  <ProductConsumer>
    {
      value => {
        const { id, title, img, price, inCart } = value.products.find(product => product.id === productId);

        return (
          <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3">
            <div className="card h-100">
              <div
                className="img-container p-3 h-100"
                onClick={() => value.handleDetail(id)}>
                <Link to="/details">
                  <img
                    src={img}
                    alt="product"
                    className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                  {
                    inCart
                      ? <p className="mb-0">In Cart</p>
                      : <i className="fas fa-cart-plus"></i>
                  }
                </button>
              </div>

              <div className="card-footer d-flex justify-content-between align-content-center">
                <p className="mb-0">
                  { title }
                </p>
                <h5 className="text-blue font-italic mb-0">
                  <span className="mr-1">$</span>
                  { price }
                </h5>
              </div>
            </div>
          </ProductWrapper>
        )
      }
    }
  </ProductConsumer>
)


const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s ease-out;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s ease-out;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgb(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;

    .card-img-top {
      transition: all 0.3s ease-out;
    }

    .cart-btn {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 0.2rem 0.6rem;
      background: var(--light-blue);
      border: none;
      color: var(--main-white);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 0.3s ease-out;

      &:hover {
        color: var(--main-black);
        cursor: pointer;
      }
    }

    &:hover {
      .card-img-top {
        transform: scale(1.2);
      }

      .cart-btn {
        transform: translate(0, 0);
      }
    }
  }
`;
