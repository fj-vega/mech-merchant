import React from 'react';
import styled from 'styled-components';


export default () => (
  <FooterWrapper className="page-footer font-small">
    <div className="footer-copyright text-center py-3">
      ©2019 Copyright - The Mech Store
    </div>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background: var(--main-black);
  color: var(--main-white);
`;
