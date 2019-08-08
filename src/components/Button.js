import styled from 'styled-components';


export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--light-blue);

  ${'' /* Passing props for conditional rendering */}
  border-color: ${props => props.cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
  color: ${props => props.cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
  
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  outline: none;
  
  &:hover {
    background: ${props => props.cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
    color: var(--main-black);
  }
`;
