import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';


export default () => (
  <ProductConsumer>
    {
      value => (
        <AlertContainer className={ value.alertPurchase && `alert-show` }>
          Purchased Successfully!
        </AlertContainer>
      )
    }
  </ProductConsumer>
)


const AlertContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  background-color: var(--main-white);
  color: var(--main-dark);
  padding: 20px 30px;
  transform: translateY(-100%);
  transition: all 0.2s ease-out;

  &.alert-show {
    transform: translateY(0);
  }
`;