import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import styled from 'styled-components';
import logo from '../logo.png';
import { ButtonContainer } from './Button';
import { ProductConsumer } from '../context';


export default () => {
  useEffect(() => {
    // Close collapsed navbar on link click
    $('.nav-link').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }, []);

  return (
    <ProductConsumer>
      {
        value => (
          <NavWrapper className="navbar navbar-expand-md navbar-light navbar-dark">
            <div className="container">
              <Link to="/">
                <img src={logo} className="navbar-brand" alt="Company logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse ml-md-5" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/store" className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/faq" className="nav-link">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link cart">
                    <ButtonContainer className="cart-button">
                      <i className="mr-2 fas fa-cart-plus"></i>
                      My cart
                        <span className={`cart-count ${value.cart.length && 'cart-count-show'}`}>
                        {value.cart.length}
                      </span>
                    </ButtonContainer>
                  </Link>
                </li>
              </div>
            </div>
          </NavWrapper>
        )
      }
    </ProductConsumer>
  )
}


const NavWrapper = styled.nav`
  background: var(--main-black);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;

  .nav-item {
    list-style: none;
    margin: 0 1rem;
    text-align: center;
  }

  ${'' /* Again, SASS syntax to style child elements */}
  .nav-link {
    color: var(--main-white) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    transition: all 0.2s ease-out;
    border-bottom: 2px solid transparent;

    &.cart {
      border: none;
    }

    &:hover {
      color: var(--light-blue) !important;
      border-color: var(--light-blue);
    }
  }

  .cart-button {
    position: relative;
  }

  .cart-count {
    position: absolute;
    top: 5px;
    left: 17px;
    color: var(--main-white) !important;
    opacity: 0;

    &.cart-count-show {
      opacity: 1;
    }
  }
`;
