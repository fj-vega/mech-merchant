import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default () => (
  <ProductConsumer>
    {
      value => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;

        if (!modalOpen) return null;

        return (
          <ModalContainer>
            <div className="container">
              <div className="row">
                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                  <button className="close-modal" onClick={closeModal}>
                    <i className="fas fa-times"></i>
                  </button>
                  <h5 className="mb-3"><em>Item added to the cart</em></h5>
                  <img src={img} className="img-fluid" alt="Product" />
                  <h5 className="mt-3">{title}</h5>
                  <h5 className="text-muted">
                    Price: ${price}
                  </h5>
                  <Link to="/store">
                    <ButtonContainer onClick={closeModal}>
                      Store
                      </ButtonContainer>
                  </Link>
                  <Link to="/cart">
                    <ButtonContainer cart className="m-1" onClick={closeModal}>
                      Go to cart
                      </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContainer>
        )
      }
    }
  </ProductConsumer>
)


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  #modal {
    position: relative;
    background: var(--main-white);

    .close-modal {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background-color: transparent;

      .fas {
        font-size: 20px;
      }
    }
  }
`;
