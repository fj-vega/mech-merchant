import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo-lg.png';
import { ButtonContainer } from './Button';


export default () => (
  <div className="page-content homepage d-flex flex-column justify-content-center align-items-center p-4 text-center">
    <img src={ logo } alt="Logo"/>
    <TitleMain className="title-main mt-2">Mech Merchant</TitleMain>
    <TitleSub className="title-sub text-muted">
      Affordable mechanical keyboards with free worldwide shipping
    </TitleSub>
    <Link to="/store" className="mt-5">
      <ButtonContainer>
        Browse Products
      </ButtonContainer>
    </Link>
  </div>
)

const TitleMain = styled.h1`
  font-size: 2.4rem;
  font-family: 'EB Garamond', serif;

  @media only screen and (min-width: 768px) {
    font-size: 6rem;
  }
`;

const TitleSub = styled.h1`
  font-size: 1.6rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.6rem;
  }
`;
